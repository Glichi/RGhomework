/*
 * @Author: your name
 * @Date: 2020-10-27 15:04:37
 * @LastEditTime: 2020-11-15 12:36:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\InBox\InBox.js
 */
// pages/InBox/InBox.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

import {getInBoxList} from '../../api/getInBoxList'
import {delInLetter} from '../../api/delInLetter'

Page({

    /**
     * 页面的初始数据
     */
    data: {
      letterList: [],
      delLetterId: ''
    },

    // 删除信件【接口】
    delInLetterById(){
      var that = this;
      delInLetter({
        id: that.data.delLetterId
      }).then( res => {
        console.log(res);
        if(res.status == 20000){
          that.getInBoxList();
          Toast.success('删除成功');
        } else{
          Toast.fail('删除失败');
        }
      })
    },

    // 删除信件
    delItem(val){
      var that = this;
      that.data.delLetterId = val.detail;
      wx.vibrateShort({
        success: (result) => {
          Dialog.confirm({
            title: '删除提示',
            message: "是否要删除该信件？"
          }).then( () => {
            // confirm
            that.delInLetterById();
          }).catch( () => {
            // cancel
          })
        },
        fail: () => {},
        complete: () => {}
      });
    },

    // 获取收件箱所有信件
    async getInBoxList(){
      var that = this;
      await getInBoxList().then( res => {
        console.log(res);
        if(res.status == 20000){
          let list = res.data.recipientEnvelopeVOList;
          let len = list.length;
          var getList = [];
          for(var i=0; i<len; i++){
            var obj = {
              letterId: list[i].id,
              letterType: 2,
              envelope: list[i].urlEnvelope,
              titleTxt: list[i].title,
              time: list[i].gmtCreate,
              to: list[i].recipientNickName,
              toId: list[i].recipientId,
              from: list[i].writerNickName,
              fromId: list[i].writerId,
              state: list[i].isRead == 0 ? 1 : 0
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
      this.getInBoxList();
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
      this.getInBoxList();
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
      await that.getInBoxList();
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