/*
 * @Author: your name
 * @Date: 2020-11-03 19:37:05
 * @LastEditTime: 2020-11-09 20:12:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\draftsBox\draftsBox.js
 */
// pages/draftsBox/draftsBox.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({

    /**
     * 页面的初始数据
     */
    data: {
      letterList: [
        {
          letterId: 1,
          letterType: 1,
          titleTxt: "啥标题来着我忘了",
          to: '',
          from: '',
          time: "2020.11.02",
          envelope: 'https://i.loli.net/2020/10/29/Gl79Ynq1M64c5xi.png'
        },
        {
          letterId: 2,
          letterType: 1,
          titleTxt: "啥标题来着我忘了",
          to: '',
          from: '',
          time: "2020.11.02",
          envelope: 'https://i.loli.net/2020/10/29/Gl79Ynq1M64c5xi.png'
        }
      ]
    },

    // 删除信件
    delItem(val){
      var letterId = val.detail;
      wx.vibrateShort({
        success: (result) => {
          Dialog.confirm({
            title: '删除提示',
            message: "是否要删除该信件？"
          }).then( () => {
            // confirm
            Toast.success('删除成功');
          }).catch( () => {
            // cancel
          })
        },
        fail: () => {},
        complete: () => {}
      });
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