/*
 * @Author: your name
 * @Date: 2020-11-14 16:18:52
 * @LastEditTime: 2020-11-14 16:19:51
 * @LastEditors: Please set LastEditors
 * @Description: 获取写信箱中一封信的内容
 * @FilePath: \RGapplets\api\getSendLetterContent.js
 */
import api from './index'

export function getSendLetterContent(data){
  return api.get(
    `/letter/writer-box/get/letter/${data.id}`
  )
}