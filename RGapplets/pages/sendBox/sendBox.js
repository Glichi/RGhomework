/*
 * @Author: your name
 * @Date: 2020-10-27 15:04:37
 * @LastEditTime: 2020-11-14 17:21:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\sendBox\sendBox.js
 */
// pages/sendBox/sendBox.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

import {getSendBoxList} from '../../api/getSendBoxList'
import {delSendLetter} from '../../api/delSendLetter'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      letterList: []
    },

    // 删除信件
    delItem(val){
      var that = this;
      var letterId = val.detail;
      wx.vibrateShort({
        success: (result) => {
          Dialog.confirm({
            title: '删除提示',
            message: "是否要删除该信件？"
          }).then( () => {
            // confirm
            delSendLetter({
              id: letterId
            }).then( res => {
              if(res.status == 20000){
                that.getSendList();
                Toast.success('删除成功');
              }
            })
          }).catch( () => {
            // cancel
          })
        },
        fail: () => {},
        complete: () => {}
      });
    },

    // 获取用户写信箱的内容【接口】
    getSendList(){
      var that = this;
      getSendBoxList().then( res => {
        console.log(res);
        if(res.status == 20000){
          let list = res.data.writerBoxList;
          let len = list.length;
          var getList = [];
          for(var i=0; i<len; i++){
            var obj = {
              letterId: list[i].id,
              letterType: 3,
              envelope: list[i].urlEnvelope,
              titleTxt: list[i].title,
              time: list[i].gmtCreate,
              to: list[i].recipientNickName,
              toId: list[i].recipientId,
              from: list[i].writerNickName,
              fromId: list[i].writerId,
              state: 0
            };
            getList.push(obj);
          }
          that.setData({
            letterList: getList
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
      var that = this;
      that.getSendList();
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