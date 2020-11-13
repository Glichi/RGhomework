/*
 * @Author: your name
 * @Date: 2020-11-13 00:01:24
 * @LastEditTime: 2020-11-13 00:15:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\api\login.js
 */
import api from '../api/index'

export function login(data){
  return api.post(
    '/user/login',
    data
  )
}