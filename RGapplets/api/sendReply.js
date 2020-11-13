/*
 * @Author: your name
 * @Date: 2020-11-13 18:20:50
 * @LastEditTime: 2020-11-13 18:52:08
 * @LastEditors: Please set LastEditors
 * @Description: 发送草稿
 * @FilePath: \RGapplets\api\sendReply.js
 */
import api from './index'

export function sendReply(data){
  return api.post(
    '/letter/writer-box/add/reply/letter',
    data
  )
}