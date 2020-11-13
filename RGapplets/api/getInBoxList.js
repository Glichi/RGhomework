/*
 * @Author: your name
 * @Date: 2020-11-13 19:41:58
 * @LastEditTime: 2020-11-13 19:42:54
 * @LastEditors: Please set LastEditors
 * @Description: 获取收件箱所有信件
 * @FilePath: \RGapplets\api\getInBoxList.js
 */
import api from './index'

export function getInBoxList(){
  return api.get(
    '/letter/recipientBox/getLetters'
  )
}