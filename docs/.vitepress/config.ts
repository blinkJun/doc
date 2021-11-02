/*
 * @Author liangjun
 * @LastEditors liangjun
 * @Date 2021-11-02 20:42:58
 * @LastEditTime 2021-11-02 22:40:27
 * @Description 
 */
// const fs = require('fs')
import fs from 'fs'
import path from 'path'

const deepInit = function(currentPath,linkPath){
  const stats = fs.statSync(currentPath)
  if(stats.isDirectory()){
    const docs = fs.readdirSync(currentPath)
    return docs.filter(docName=>{
      return !['assets'].includes(docName)
    }).map(docName=>{
      const link = `${linkPath}/${docName}`
      const children = deepInit(path.resolve(currentPath,docName),link)
      if(Array.isArray(children)){
        return {
          text:docName,
          children:children
        }
      }else{
        return children
      }
    })
  }else{
    const pathInfo = path.parse(currentPath)
    const sidebar = {
      text:pathInfo.name,
      link:linkPath.substring(0,linkPath.length-pathInfo.ext.length)
    }
    return sidebar
  }

}
// 生成文档目录
const sidebars =  deepInit(path.resolve(__dirname,"../docs"),"/docs")

module.exports = {
  title: 'Blink Docs',
  description: 'web 前端 学习文档',

  themeConfig:{
    logo: '/images/logo.png',
    logoSmall: '/images/logo.png',
    sidebar: sidebars
  }
}