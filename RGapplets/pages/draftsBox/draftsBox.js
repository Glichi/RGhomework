/*
 * @Author: your name
 * @Date: 2020-11-03 19:37:05
 * @LastEditTime: 2020-11-15 12:33:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\draftsBox\draftsBox.js
 */
// pages/draftsBox/draftsBox.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

import {getAllDrafts} from '../../api/getAllDrafts'
import {delDrafts} from '../../api/delDrafts'

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
            // 删除接口
            delDrafts({
              id: letterId
            }).then( res => {
              console.log(res);
              if(res.status == 20000){
                that.getDraftsList();
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

    // 获取当前用户的所有的草稿【接口】
    async getDraftsList(){
      var that = this;
      await getAllDrafts().then( res => {
        console.log(res);
        if(res.status == 20000){
          let list = res.data.draftBoxList;
          let len = list.length;
          var getList = [];
          for(var i=0; i<len; i++){
            var obj = {
              letterId: list[i].id,
              letterType: 1,
              envelope: list[i].urlEnvelope,
              titleTxt: list[i].title,
              time: list[i].gmtModified,
              to: list[i].recipientNickName,
              toId: list[i].recipientId,
              from: list[i].writerNickName,
              fromId: list[i].writerId,
              state: 0
            }
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
      that.getDraftsList();
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
      var that = this;
      that.getDraftsList();
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
    onPullDownRefresh: async function () {
      var that = this;
      console.log('下拉刷新');
      await that.getDraftsList();
      wx.stopPullDownRefresh({
        success(res){
          console.log('刷新成功');
        }
      })
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