/*
 * @Author: your name
 * @Date: 2020-10-20 19:47:01
 * @LastEditTime: 2020-10-29 21:16:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\app.js
 */

App({
  globalData:{
    userInfo: {},  // 用户个人信息
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],  // 获取导航栏的高度
    checkedImageId: '',  // 选择的信纸
    isSend: false,  // 是否成功发送信件
  },

  onLaunch: function () {
    
  },
  onShow: function(){
    if(Object.keys(this.globalData.userInfo).length <= 0){
      this.globalData.userInfo = wx.getStorageSync('LS_userInfo')
    }
  }
  
})