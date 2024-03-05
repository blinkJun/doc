/*
 * @Author liangjun
 * @LastEditors liangjun
 * @Date 2020-07-21 14:16:40
 * @LastEditTime 2021-10-09 11:08:08
 * @Description
 */
const fs = require('fs');
const OSS = require('ali-oss');

const ossProjectPath = 'console/admin-data-analysis/';
const localProjectDist = `${process.cwd()}/dist`;

const client = new OSS({
  region: 'oss-cn-hangzhou',
  accessKeyId: '',
  accessKeySecret: '',
  bucket: 'samh-webdev',
});

/**
 * @method putFile
 * @description 将文件上传到oss储存
 * @param {String} localFilePath 本地路径 E:\works\samanhua\backstage-op\dist\index.html
 * @param {String} ossPath oss路径 /console/ops-samanhua/index.html
 * @return {Promise} 返回结果
 */
async function putFile(localFilePath, ossPath) {
  return client.put(ossPath, localFilePath);
}

/**
 * @method deleteFile
 * @description 删除oss指定位置文件
 * @param {String} ossPath oss路径
 * @return {Promise} 返回结果
 */
async function deleteFile(ossPath) {
  return client.delete(ossPath);
}

/**
 * @method getOssFilesList
 * @description 获取指定路径下所有oss文件地址
 * @param {String} ossPath 指定路径
 * @return {Array} 路径下所有文件地址
 */
async function getOssFilesList(ossPath, allFile = []) {
  const ossFileList = await client.list({
    prefix: ossPath,
    delimiter: '/',
  });
  if (ossFileList.prefixes && ossFileList.prefixes.length > 0) {
    await Promise.all(
      ossFileList.prefixes.map(async (path) => {
        return getOssFilesList(`${path}`, allFile);
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
function getUploadFiles(path, allFilePath = []) {
  const files = fs.readdirSync(path);
  for (let i = 0; i < files.length; i++) {
    const childrenFilePath = path + '/' + files[i];
    var childrenFileInfo = fs.statSync(childrenFilePath);
    // 是文件夹
    if (childrenFileInfo.isDirectory()) {
      getUploadFiles(childrenFilePath, allFilePath);
    } else {
      allFilePath.push(childrenFilePath);
    }
  }
  return allFilePath;
}

// 删除=>上传
async function upload() {
  // 删除oss位置的文件
  const needDeleteFiles = await getOssFilesList(ossProjectPath);
  await Promise.all(
    needDeleteFiles.map((path) => {
      return deleteFile(path);
    })
  );
  console.log('删除oss文件成功');

  const files = getUploadFiles(localProjectDist);
  await Promise.all(
    files.map((filePath) => {
      const ossPath = filePath
        .replace(localProjectDist, ossProjectPath)
        .replace('//', '/');
      return putFile(filePath, ossPath);
    })
  );
  console.log('上传成功！');
}

upload();
