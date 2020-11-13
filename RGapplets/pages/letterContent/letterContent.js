/*
 * @Author: your name
 * @Date: 2020-11-03 15:04:40
 * @LastEditTime: 2020-11-13 20:15:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\letterContent\letterContent.js
 */
// pages/letterContent/letterContent.js
import {getLetterContent} from '../../api/getLetterContent'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      statusBarHeight: getApp().globalData.statusBarHeight, // 导航栏的高度
      capsuleHeight: '',  // 右上角胶囊高度
      capsuleTop: '',  // 右上角胶囊上边界坐标
      capsuleBottom: '',  // 右上角胶囊下边界坐标
      letterSrc: '',
      letterTitle: '',  // 标题
      letterContent: '',  // 正文
      letterId: '',  // 信件id 用于看信
      letterType: '',  // 信件类型
      to: '',  // 收信人昵称
      toId: '',  // 收信人Id（一般都是自己）
      from: '',  // 寄信人昵称
      fromId: '',  // 寄信人Id
      time: '',  // 时间
    },

    // 返回上一页
    gotoback(){
      wx.navigateBack({
        delta: 1
      })
    },

    replyMsg(){
      var that = this;
      wx.navigateTo({
        url: `/pages/writeLetter/writeLetter?letterId=${that.data.letterId}&to=${that.data.to}&toId=${that.data.toId}&from=${that.data.from}&fromId=${that.data.fromId}&letterSrc=${that.data.letterSrc}`,
      })
    },

    // 根据信件id获取信件具体内容
    getLetterContent(){
      var that = this;
      getLetterContent({
        id: that.data.letterId
      }).then( res => {
        console.log(res);
        var resObj = res.data.recipientContentVO;
        if(res.status == 20000){
          that.setData({
            toId: resObj.recipientId,
            to: resObj.recipientNickName,
            fromId: resObj.writerId,
            from: resObj.writerNickName,
            letterTitle: resObj.title,
            letterContent: resObj.content,
            letterSrc: resObj.urlPaper,
            time: resObj.gmtCreate
          })
        }
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that =this;
      console.log(options)
      var capsuleObj = wx.getMenuButtonBoundingClientRect();
      that.setData({
        capsuleHeight: capsuleObj.height,
        capsuleTop: capsuleObj.top,
        capsuleBottom: capsuleObj.bottom,
        letterId: options.letterId,
        letterType: options.letterType ? options.letterType : 2
      })
      that.getLetterContent();
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