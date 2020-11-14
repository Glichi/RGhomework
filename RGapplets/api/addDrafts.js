/*
 * @Author: your name
 * @Date: 2020-11-14 16:53:44
 * @LastEditTime: 2020-11-14 16:54:27
 * @LastEditors: Please set LastEditors
 * @Description: 新增一条草稿
 * @FilePath: \RGapplets\api\addDrafts.js
 */
import api from './index'

export function addDrafts(data){
  return api.post(
    '/letter/draft-box/add/draft',
    data
  )
}