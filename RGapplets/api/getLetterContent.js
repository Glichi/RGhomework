/*
 * @Author: your name
 * @Date: 2020-11-13 18:06:08
 * @LastEditTime: 2020-11-13 18:07:24
 * @LastEditors: Please set LastEditors
 * @Description: 获取信件内容并实现阅读状态的更改
 * @FilePath: \RGapplets\api\getLetterContent.js
 */
import api from './index'

export function getLetterContent(data){
  return api.get(
    `/letter/recipientBox/getRecipientLetterContent/${data.id}`
  )
}