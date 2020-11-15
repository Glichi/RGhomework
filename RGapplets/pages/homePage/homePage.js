/*
 * @Author: your name
 * @Date: 2020-10-24 15:35:49
 * @LastEditTime: 2020-11-14 23:40:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\homePage\homePage.js
 */
// pages/homePage/homePage.js
import {getLastTen} from '../../api/getLastTen'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      letterList: []
    },

    // 获取用户收件箱最新10条收件记录【接口】
    async getLastLetters(){
      var that = this;
      await getLastTen().then( res => {
        console.log(res);
        if(res.status == 20000){
          let list = res.data.recipientEnvelopeVOList 
          let len = list.length;
          var getList = [];
          for(var i=0; i<len; i++){
            var obj = {
              letterId: list[i].id,
              imageUrl: list[i].urlEnvelope,
              letterTitle: list[i].title,
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
      this.getLastLetters()
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
    onPullDownRefresh: async function () {
      var that = this;
      console.log('下拉刷新');
      await that.getLastLetters();
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