/*
 * @Author: your name
 * @Date: 2020-10-20 19:47:01
 * @LastEditTime: 2020-10-27 14:56:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\app.js
 */
import Toast from './miniprogram_npm/@vant/weapp/toast/toast';
import {getToken, setToken, removeToken} from './utils/cookie'

App({
  globalData:{
    userInfo: {},  // 用户个人信息
  },

  onLaunch: function () {
    
  },
  onShow: function(){
    if(Object.keys(this.globalData.userInfo).length <= 0){
      this.globalData.userInfo = wx.getStorageSync('LS_userInfo')
    }
  }
  
})