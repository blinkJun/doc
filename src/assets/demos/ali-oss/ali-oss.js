/*
 * 通过本文件把dist目录发布到oss目录，需要配置
 * ossProjectPath和localProjectDist目录
 */
const mapLimit = require('async/mapLimit');
const fs = require('fs');
const OSS = require('ali-oss');
const Spinner = require('cli-spinner').Spinner;

export default class OssClient {
  client = null;

  constructor(ossConfig) {
    this.client = new OSS(ossConfig);
  }

  /**
   * @method putFileStream
   * @description 流文件上传到oss储存
   * @param {String} localFilePath 本地路径 E:\works\samanhua\backstage-op\dist\index.html
   * @param {String} ossPath oss路径 /folder_test_002/intelligent-editor/index.html
   * @return {Promise} 返回结果
   */
  putFileStream(localFilePath, ossPath) {
    return this.client.putStream(ossPath, fs.createReadStream(localFilePath));
  }

  /**
   * @method deleteFile
   * @description 删除oss指定位置文件
   * @param {String} ossPath oss路径
   * @return {Promise} 返回结果
   */
  deleteFile(ossPath) {
    return this.client.delete(ossPath);
  }

  /**
   * @method getOssFilesList
   * @description 获取指定路径下所有oss文件地址
   * @param {String} ossPath 指定路径
   * @return {Array} 路径下所有文件地址
   */
  async getOssFilesList(ossPath, allFile = []) {
    const ossFileList = await this.client.list({
      prefix: ossPath,
      delimiter: '/',
    });
    if (ossFileList.prefixes && ossFileList.prefixes.length > 0) {
      await Promise.all(
        ossFileList.prefixes.map(async (path) => {
          return this.getOssFilesList(`${path}`, allFile);
        })
      );
    }
    if (ossFileList.objects && ossFileList.objects.length > 0) {
      ossFileList.objects.forEach((pathInfo) => {
        allFile.push(pathInfo.name);
      });
    }
    return allFile;
  }

  /**
   * @method getUploadFiles
   * @description 获取本地指定路径下所有文件地址
   * @param {String} path 指定路径
   * @return {Array} 路径下所有文件地址
   */
  getUploadFiles(path, allFilePath = []) {
    const files = fs.readdirSync(path);
    for (let i = 0; i < files.length; i++) {
      const childrenFilePath = path + '/' + files[i];
      const childrenFileInfo = fs.statSync(childrenFilePath);
      // 是文件夹
      if (childrenFileInfo.isDirectory()) {
        this.getUploadFiles(childrenFilePath, allFilePath);
      } else {
        allFilePath.push(childrenFilePath);
      }
    }
    return allFilePath;
    // 删除=>上传
  }

  async upload(projectConfig) {
    const ossProjectPath = projectConfig.ossProjectPath;
    const localProjectDist = projectConfig.localProjectDist;
    const needDeleteServerFiles = projectConfig.needDeleteServerFiles;
    // 需要删除
    if (needDeleteServerFiles) {
      const needDeleteFiles = await this.getOssFilesList(ossProjectPath);
      await Promise.all(
        needDeleteFiles.map((path) => {
          return this.deleteFile(path);
        })
      );
      console.log('删除oss文件成功');
    }

    const files = this.getUploadFiles(localProjectDist);
    let successCount = 0;
    let errorCount = 0;
    const spinner = new Spinner('已上传：0 of ' + files.length);
    spinner.start();
    mapLimit(
      files,
      10,
      async (filePath) => {
        const ossPath = filePath
          .replace(localProjectDist, ossProjectPath)
          .replace('//', '/');
        const result = await this.putFileStream(filePath, ossPath);
        if (result?.res?.status === 200) {
          spinner.setSpinnerTitle(`上传中：${successCount} of ` + files.length);
          successCount++;
        } else {
          spinner.stop();
          errorCount++;
          process.stdout.write('\n');
          console.log(`上传[${filePath}]失败：${result?.res?.status}`);
          spinner.start();
        }
      },
      (err) => {
        if (err) {
          throw new Error(err);
        }
        spinner.stop(true);
        if (successCount === files.length) {
          console.log(`上传成功！${successCount}/${files.length}`);
        } else {
          throw new Error(`上传失败！失败数量：${errorCount}`);
        }
      }
    );
  }
}
