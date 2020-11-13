/*
 * @Author: your name
 * @Date: 2020-11-13 17:04:58
 * @LastEditTime: 2020-11-13 17:05:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\api\getUserInfo.js
 */
import api from './index'

export function getUserInfo(){
  return api.get(
    '/user/selectUserInfo'
  )
}