/*
 * @Author: your name
 * @Date: 2020-10-27 11:00:19
 * @LastEditTime: 2020-11-13 16:49:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\login\login.js
 */
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'

import {login} from '../../api/login'
import {setToken, getToken} from '../../utils/cookie'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      
    },

    // 获取用户信息
    getuserinfo(val){
      wx.showLoading({
        title: '登录中',
      })
      const userInfo = val.detail.userInfo;
      if(userInfo){
        var app = getApp();
        wx.login({
          success(res){
            console.log(res);
            app.globalData.userInfo=userInfo;  // 把用户信息放进全局变量
            wx.setStorageSync("LS_userInfo", userInfo);  // 把用户信息存进缓存
            var code = res.code;
            login({
              code
            }).then( res => {
              wx.hideLoading()
              console.log(res);
              if(res.status == 20000){
                setToken(res.data.loginDTO.token);
                wx.switchTab({
                  url: '/pages/homePage/homePage'
                })
              } else{
                Toast.fail('登录失败');
              }
            }).catch( err => {
              wx.hideLoading();
              Toast.fail('登录失败');
              console.log(err);
            })
          },
          fail(err){
            Toast.fail("操作失败")
          }
        })
      } else{
        Toast.fail("授权失败")
      }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      // setTimeout( () => {
      //   wx.reLaunch({
      //     url: '/pages/wechatLogin/wechatLogin'
      //   })
      // }, 3000);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})