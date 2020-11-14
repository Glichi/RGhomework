/*
 * @Author: your name
 * @Date: 2020-11-14 23:43:30
 * @LastEditTime: 2020-11-14 23:44:53
 * @LastEditors: Please set LastEditors
 * @Description: 根据收到的信的id获取回复这封信的草稿
 * @FilePath: \RGapplets\api\draftsByReplyLetterId.js
 */
import api from './index'

export function draftsByReplyLetterId(data){
  return api.get(
    `/letter/draft-box/get/draft/by/letter/id/${data.id}`
  )
}