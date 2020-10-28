/*
 * @Author: your name
 * @Date: 2020-10-24 15:46:55
 * @LastEditTime: 2020-10-28 09:55:00
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
      activeNum: 1,  // 当前步骤
    },

    // 点击步骤时触发的事件
    getStep(e){
      if(this.data.activeNum >= e.detail){
        this.setData({
          activeNum: e.detail
        })
      }
    },

    // 进入步骤二
    nextToWrite(val){  // val 是信纸 id
      this.setData({
        activeNum: 1
      })
      console.log("imageId：" + val.detail);
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