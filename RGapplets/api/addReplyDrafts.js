/*
 * @Author: your name
 * @Date: 2020-11-14 22:21:46
 * @LastEditTime: 2020-11-14 22:24:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\api\addReplyDrafts.js
 */
import api from './index'

export function addReplyDrafts(data){
  return api.post(
    '/letter/draft-box/add/reply/draft',
    data
  )
}