/*
 * @Author: your name
 * @Date: 2020-10-24 15:40:58
 * @LastEditTime: 2020-10-30 10:42:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\writeLetter\writeLetter.js
 */
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

    /**
     * 页面的初始数据
     */
    data: {
      navigationTitle: '书写正文',
      statusBarHeight: getApp().globalData.statusBarHeight, // 导航栏的高度
      capsuleHeight: '',  // 右上角胶囊高度
      capsuleTop: '',  // 右上角胶囊上边界坐标
      capsuleBottom: '',  // 右上角胶囊下边界坐标
      letterSrc: 'https://i.loli.net/2020/10/29/Z7O9Laz423NegKP.png',
      letterTitle: '',  // 标题
      letterContent: '',  // 正文
    },

    // 获取标题
    getTitle(e){
      this.setData({
        letterTitle: e.detail.value.trim()
      })
    },

    // 获取正文
    getContet(e){
      this.setData({
        letterContent: e.detail.value.trim()
      })
    },

    // 返回上一页
    gotoback(){
      wx.navigateBack({
        delta: 1
      })
    },

    // 点击发送
    sendMsg(){
      if(this.data.letterContent == '' || this.data.letterTitle == ''){
        return Dialog.alert({
          message: '要填写完整信件哦~',
        }).then(() => {
          
        });
      }
      Dialog.confirm({
        title: "发送提示",
        message: "确认发送信件吗？"
      }).then( () => {
        var app = getApp();
        app.globalData.isSend = true;
        app.globalData.checkedImageId = '';
        wx.navigateBack({
          delta: 1
        })
      }).catch( () => {
        console.log("no");
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that =this;
      var capsuleObj = wx.getMenuButtonBoundingClientRect();
      that.setData({
        capsuleHeight: capsuleObj.height,
        capsuleTop: capsuleObj.top,
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