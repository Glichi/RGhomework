/*
 * @Author: your name
 * @Date: 2020-11-13 20:15:58
 * @LastEditTime: 2020-11-13 20:16:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\api\getAllSrc.js
 */
import api from './index'

export function getAllSrc(){
  return api.get(
    '/letter/envelope-style/get/all/envelope/style'
  )
}