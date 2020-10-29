/*
 * @Author: your name
 * @Date: 2020-10-24 15:35:49
 * @LastEditTime: 2020-10-29 19:21:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\homePage\homePage.js
 */
// pages/homePage/homePage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      letterList: [
        {
          id: 1,
          imageUrl: 'https://i.loli.net/2020/10/29/Gl79Ynq1M64c5xi.png',
          letterTitle: '别看啦没啥好看的',
          to: '郭子芊2号',
          from: '郭子芊1号',
          state: 1  // 1 未读 0 已读 （尚未和后台对接）
        },
        {
          id: 2,
          imageUrl: 'https://i.loli.net/2020/10/29/Gl79Ynq1M64c5xi.png',
          letterTitle: '别看啦没啥好看的',
          to: '郭子芊2号',
          from: '郭子芊1号',
          state: 1
        },
        {
          id: 3,
          imageUrl: 'https://i.loli.net/2020/10/29/Gl79Ynq1M64c5xi.png',
          letterTitle: '别看啦没啥好看的',
          to: '郭子芊2号',
          from: '郭子芊1号',
          state: 0
        },
        {
          id: 4,
          imageUrl: 'https://i.loli.net/2020/10/29/Gl79Ynq1M64c5xi.png',
          letterTitle: '别看啦没啥好看的',
          to: '郭子芊2号',
          from: '郭子芊1号',
          state: 0
        },
        {
          id: 5,
          imageUrl: 'https://i.loli.net/2020/10/29/Gl79Ynq1M64c5xi.png',
          letterTitle: '别看啦没啥好看的',
          to: '郭子芊2号',
          from: '郭子芊1号',
          state: 0
        }
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