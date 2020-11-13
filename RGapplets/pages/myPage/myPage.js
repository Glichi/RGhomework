/*
 * @Author: your name
 * @Date: 2020-10-24 15:40:33
 * @LastEditTime: 2020-11-13 21:16:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\myPage\myPage.js
 */
// pages/myPage/myPage.js
import {getUserInfo} from '../../api/getUserInfo'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      userInfo: {},  // 用户信息
      userMsgList: [
        // {
        //   title: '草稿箱',
        //   content: '',
        //   url: '/pages/draftsBox/draftsBox'
        // },
        // {
        //   title: '收信箱',
        //   content: '',
        //   url: '/pages/InBox/InBox'
        // },
        // {
        //   title: '已发送',
        //   content: '',
        //   url: '/pages/sendBox/sendBox'
        // }
      ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      
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
      getUserInfo().then( res => {
        console.log(res);
        if(res.status == 20000){
          var app = getApp()
          app.globalData.userInfo.nick = res.data.userInfo.nickName
          wx.setStorageSync("LS_userInfo", app.globalData.userInfo);
          var that = this;
          var myObj = [
            {
              title: '用户名',
              content: app.globalData.userInfo.nickName,
              url: ''
            },
            {
              title: '昵称',
              content: app.globalData.userInfo.nick,
              url: '/pages/editNickName/editNickName'
            },
            {
              title: '草稿箱',
              content: '',
              url: '/pages/draftsBox/draftsBox'
            },
            {
              title: '收信箱',
              content: '',
              url: '/pages/InBox/InBox'
            },
            {
              title: '已发送',
              content: '',
              url: '/pages/sendBox/sendBox'
            }
          ]
          that.setData({
            userInfo: app.globalData.userInfo,
            userMsgList: myObj
          })
        }
      }).catch( err => {
        console.log(err);
      })
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