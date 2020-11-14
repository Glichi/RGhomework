/*
 * @Author: your name
 * @Date: 2020-11-14 17:40:11
 * @LastEditTime: 2020-11-14 17:40:56
 * @LastEditors: Please set LastEditors
 * @Description: 删除一条草稿
 * @FilePath: \RGapplets\api\delDrafts.js
 */
import api from './index'

export function delDrafts(data){
  return api.remove(
    `/letter/draft-box/delete/draft/${data.id}`
  )
}