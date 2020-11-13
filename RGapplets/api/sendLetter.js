/*
 * @Author: your name
 * @Date: 2020-11-13 21:32:36
 * @LastEditTime: 2020-11-13 21:33:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\api\sendLetter.js
 */
import api from './index'

export function sendLetter(data){
  return api.post(
    '/letter/writer-box/add/letter',
    data
  )
}