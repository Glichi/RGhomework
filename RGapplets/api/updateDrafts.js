/*
 * @Author: your name
 * @Date: 2020-11-14 17:31:56
 * @LastEditTime: 2020-11-14 17:33:03
 * @LastEditors: Please set LastEditors
 * @Description: 更新草稿
 * @FilePath: \RGapplets\api\updateDrafts.js
 */
import api from './index'

export function updateDrafts(data){
  return api.put(
    '/letter/draft-box/update/draft',
    data
  )
}