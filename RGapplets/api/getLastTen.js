/*
 * @Author: your name
 * @Date: 2020-11-13 17:32:28
 * @LastEditTime: 2020-11-13 17:33:20
 * @LastEditors: Please set LastEditors
 * @Description: 返回用户收件箱最新10条收件记录
 * @FilePath: \RGapplets\api\getLastTen.js
 */
import api from './index'

export function getLastTen(){
  return api.get(
    '/letter/recipientBox/getPageLetters'
  )
}