/*
 * @Author: your name
 * @Date: 2020-10-27 11:00:19
 * @LastEditTime: 2020-10-27 11:38:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\login\login.js
 */
// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      
    },

    // 获取用户信息
    getuserinfo(val){
      console.log(val)
      const userInfo = val.detail.userInfo;
      var app = getApp();
      wx.login({
        success(res){
          console.log(res);
          app.globalData.userInfo=userInfo;  // 把用户信息放进全局变量
          console.log(app.globalData.userInfo);
          wx.setStorageSync("LS_userInfo", userInfo);  // 把用户信息存进缓存
          wx.switchTab({
            url: '/pages/myPage/myPage'
          })
        }
      })
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