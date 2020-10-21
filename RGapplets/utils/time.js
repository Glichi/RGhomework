/*
 * @Author: your name
 * @Date: 2020-10-20 19:47:01
 * @LastEditTime: 2020-10-21 21:53:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\utils\util.js
 */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
