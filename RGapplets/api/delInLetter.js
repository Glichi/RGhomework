/*
 * @Author: your name
 * @Date: 2020-11-13 20:52:48
 * @LastEditTime: 2020-11-13 20:55:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\api\delInLetter.js
 */
import api from './index'

export function delInLetter(data){
  return api.remove(
    `/letter/recipientBox/deleteLetter/${data.id}`
  )
}