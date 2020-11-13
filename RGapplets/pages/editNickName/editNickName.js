/*
 * @Author: your name
 * @Date: 2020-10-27 15:04:37
 * @LastEditTime: 2020-11-13 17:23:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\editNickName\editNickName.js
 */
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

import {updateNickName} from '../../api/updateNickName'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      nickName: ''
    },

    // 获得 nickName
    getNickName(e){
      this.setData({
        nickName: e.detail.value
      })
    },

    // 保存修改昵称
    saveNickName(){
      var that = this;
      if(that.data.nickName == '' || that.data.nickName.length == 0){
        return Toast.fail('昵称不能为空');
      }
      updateNickName({
        nickName: that.data.nickName
      }).then( res => {
        console.log(res);
        if(res.status == 20000){
          Toast({
            type: 'success',
            message: '修改成功',
            onClose: () => {
              wx.navigateBack({
                delta: 1
              })
            }
          })
        }
      }).catch( err => {
        console.log(err);
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var app = getApp()
      this.setData({
        nickName: app.globalData.userInfo.nick
      });
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