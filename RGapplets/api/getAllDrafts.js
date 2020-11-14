/*
 * @Author: your name
 * @Date: 2020-11-14 17:14:03
 * @LastEditTime: 2020-11-14 17:16:22
 * @LastEditors: Please set LastEditors
 * @Description: 获取当前用户的所有的草稿
 * @FilePath: \RGapplets\api\getAllDrafts.js
 */
import api from './index'

export function getAllDrafts(){
  return api.get(
    '/letter/draft-box/get/all/drafts'
  )
}