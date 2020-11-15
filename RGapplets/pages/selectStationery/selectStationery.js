/*
 * @Author: your name
 * @Date: 2020-10-24 15:46:55
 * @LastEditTime: 2020-11-15 12:29:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\selectStationery\selectStationery.js
 */
// pages/selectStationery/selectStationery.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      stepsList: [  // 步骤条
        {
          desc: '选择信纸'
        },
        {
          desc: '书写正文'
        },
        {
          desc: '完成发送'
        },
      ],
      checkedImageId: '',  // 已选信纸图片
      activeNum: 0,  // 当前步骤
      letterSrc: 'https://i.loli.net/2020/10/28/ejQrL3IMRT6wF9l.png',  // 信纸样式
    },

    // 进入步骤二（书写正文）
    nextToWrite(val){  // val 是信纸 id
      var app = getApp();
      this.setData({
        activeNum: 1,
        checkedImageId: val.detail
      })
      app.globalData.checkedImageId = val.detail;
      wx.navigateTo({
        url: `/pages/writeLetter/writeLetter?envelopeId=${val.detail[0].id}&letterSrc=${val.detail[0].imageSrc}`
      })
    },

    // 发送成功，回到第一步
    restart(){
      this.setData({
        activeNum: 0
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
      var app = getApp();
      if(app.globalData.isSend){  // 已发送，跳到成功发送页面
        this.setData({
          activeNum: 2,
          checkedImageId: app.globalData.checkedImageId
        });
        app.globalData.isSend = false;
      } else{
        this.setData({
          activeNum: 0,
          checkedImageId: app.globalData.checkedImageId
        })
      }
      // this.setData({
      //   activeNum: 0
      // })
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