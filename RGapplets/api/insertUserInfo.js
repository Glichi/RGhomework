/*
 * @Author: your name
 * @Date: 2020-11-17 00:05:10
 * @LastEditTime: 2020-11-17 00:08:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\api\insertUserInfo.js
 */
import api from './index'

export function insertUserInfo(data){
  return api.post(
    '/user/insertUserInfo',
    data
  )
}