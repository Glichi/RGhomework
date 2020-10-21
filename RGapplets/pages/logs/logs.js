/*
 * @Author: your name
 * @Date: 2020-10-20 19:47:01
 * @LastEditTime: 2020-10-21 21:53:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\logs\logs.js
 */
//logs.js
const util = require('../../utils/time.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
