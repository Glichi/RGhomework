/*
 * @Author: your name
 * @Date: 2020-11-14 16:27:30
 * @LastEditTime: 2020-11-14 16:28:43
 * @LastEditors: Please set LastEditors
 * @Description: 删除写过的信
 * @FilePath: \RGapplets\api\delSendLetter.js
 */
import api from './index'

export function delSendLetter(data){
  return api.remove(
    `/letter/writer-box/delete/letter/${data.id}`
  )
}