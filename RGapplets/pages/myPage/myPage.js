/*
 * @Author: your name
 * @Date: 2020-10-24 15:40:33
 * @LastEditTime: 2020-11-03 19:37:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\myPage\myPage.js
 */
// pages/myPage/myPage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      userInfo: {},  // 用户信息
      userMsgList: [
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
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var app = getApp()
      var that = this;
      var myObj = [
        {
          title: '用户名',
          content: app.globalData.userInfo.nickName,
          url: ''
        },
        {
          title: '昵称',
          content: app.globalData.userInfo.nickName,
          url: '/pages/editNickName/editNickName'
        }
      ]
      that.setData({
        userInfo: app.globalData.userInfo,
        userMsgList: myObj.concat(that.data.userMsgList)
      })
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