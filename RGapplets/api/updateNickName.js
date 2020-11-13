/*
 * @Author: your name
 * @Date: 2020-11-13 16:51:16
 * @LastEditTime: 2020-11-13 17:10:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\api\updateNickName.js
 */
import api from './index'

export function updateNickName(data){
  return api.get(
    `/user/updateNickname?nickName=${data.nickName}`
  )
}