/*
 * @Author: your name
 * @Date: 2020-11-14 15:22:39
 * @LastEditTime: 2020-11-14 15:27:54
 * @LastEditors: Please set LastEditors
 * @Description: 获取用户写信箱的内容
 * @FilePath: \RGapplets\api\getSendBoxList.js
 */
import api from './index'

export function getSendBoxList(){
  return api.get(
    '/letter/writer-box/get/all/writer/letters'
  )
}