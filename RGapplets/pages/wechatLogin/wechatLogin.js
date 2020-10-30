/*
 * @Author: your name
 * @Date: 2020-10-30 12:37:51
 * @LastEditTime: 2020-10-30 12:47:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\wechatLogin\wechatLogin.js
 */
// pages/wechatLogin/wechatLogin.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      statusBarHeight: getApp().globalData.statusBarHeight, // 导航栏的高度
      capsuleBottom: '',  // 右上角胶囊下边界坐标
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
            url: '/pages/homePage/homePage'
          })
        },
        fail(err){
          Toast.fail("请选择信纸")
        }
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that =this;
      var capsuleObj = wx.getMenuButtonBoundingClientRect();
      that.setData({
        capsuleBottom: capsuleObj.bottom
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