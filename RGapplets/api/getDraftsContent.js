/*
 * @Author: your name
 * @Date: 2020-11-14 16:39:08
 * @LastEditTime: 2020-11-14 16:40:24
 * @LastEditors: Please set LastEditors
 * @Description: 获取一条草稿
 * @FilePath: \RGapplets\api\getDraftsContent.js
 */
import api from './index'

export function getDraftsContent(data){
  return api.get(
    `/letter/draft-box/get/draft/${data.id}`
  )
}