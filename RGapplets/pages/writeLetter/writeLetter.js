/*
 * @Author: your name
 * @Date: 2020-10-24 15:40:58
 * @LastEditTime: 2020-11-13 21:41:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\writeLetter\writeLetter.js
 */
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

import {sendReply} from '../../api/sendReply'
import {getAllSrc} from '../../api/getAllSrc'
import {sendLetter} from '../../api/sendLetter'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      navigationTitle: '书写正文',
      statusBarHeight: getApp().globalData.statusBarHeight, // 导航栏的高度
      capsuleHeight: '',  // 右上角胶囊高度
      capsuleTop: '',  // 右上角胶囊上边界坐标
      capsuleBottom: '',  // 右上角胶囊下边界坐标
      letterSrc: '',
      envelopeId: 0,  // 样式 id
      letterTitle: '',  // 标题
      letterContent: '',  // 正文
      letterId: '',  // 信件id 用于回信 / 草稿箱
      to: '',  // 收送人（用于查看草稿箱【回信】）
      toId: '',  // 收信人Id
      from: '',  // 发送人（用于查看草稿箱【回信】）
      fromId: '',  // 寄信人Id
      placeholderTextarea: '',  // textarea placeholder 文案
      btnText: '',  // 按钮文案
    },

    // 获取标题
    getTitle(e){
      this.setData({
        letterTitle: e.detail.value.trim()
      })
    },

    // 获取正文
    getContet(e){
      this.setData({
        letterContent: e.detail.value.trim()
      })
    },

    // 返回上一页
    gotoback(){
      wx.navigateBack({
        delta: 1
      })
    },

    // 点击保存
    saveMsg(){
      var that = this;
      Toast.success('保存成功');
    },

    // 根据样式url获取id
    getIdBySrc(){
      return new Promise((resolve, reject) => {
        getAllSrc().then( res => {
          console.log(res);
          if(res.status == 20000){
            resolve(res.data);
          }
        }).catch( err => {
          console.log(err);
        })
      })
    },

    // 发送回信【接口】
    async sendReply(){
      var that = this;
      var allSrc = await that.getIdBySrc();
      let envelopeId;
      for(var i=0; i<allSrc.length; i++){
        if(allSrc[i].urlPaper == that.data.letterSrc){
          envelopeId = allSrc[i].id;
          break;
        }
      }
      sendReply({
        recipientId: Number(that.data.toId),
        recipientNickName: that.data.to,
        title: that.data.letterTitle,
        content: that.data.letterContent,
        envelopeId: Number(envelopeId)
      }).then( res => {
        console.log(res);
        if(res.status == 20000){
          wx.navigateBack({
            delta: 1
          })
        }
      }).catch( err => {
        console.log(err);
      })
    },

    // 发送信息（非回信）【接口】
    sendLetter(){
      var that = this;
      sendLetter({
        title: that.data.letterTitle,
        content: that.data.letterContent,
        envelopeId: Number(that.data.envelopeId)
      }).then( res => {
        console.log(res);
        if(res.status == 20000){
          var app = getApp();
          app.globalData.isSend = true;
          app.globalData.checkedImageId = '';
          wx.navigateBack({
            delta: 1
          })
        }
      }).catch( err => {
        console.log(err);
      })
    },

    // 点击发送 / 回复
    sendMsg(){
      var that = this;
      if(that.data.letterContent == '' || that.data.letterTitle == ''){
        return Dialog.alert({
          message: '要填写完整信件哦~',
        }).then(() => {
          
        });
      }
      Dialog.confirm({
        title: "发送提示",
        message: "确认发送信件吗？"
      }).then( () => {
        if(that.data.letterId != ''){  // 回信
          that.sendReply();
        } else{  // 写信
          that.sendLetter();
        }
      }).catch( (err) => {
        console.log(err);
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
        capsuleBottom: capsuleObj.bottom
      })
      if(!options.letterType){  // 否从草稿箱中进入
        if(!options.letterId){  // 写信
          that.setData({
            btnText: '发送',
            placeholderTextarea: '写些什么吧~',
            letterSrc: options.letterSrc,
          })
        } else{  // 回信 看信
          that.setData({
            letterId: options.letterId,
            to: options.from,
            toId: options.fromId,
            from: options.to,
            fromId: options.toId,
            letterSrc: options.letterSrc,
            btnText: '回复',
            placeholderTextarea: '写个温暖的回复吧~'
          })
        }
      } else{  // 从草稿箱中进入
        that.setData({
          letterId: options.letterId,
          btnText: '发送',
          placeholderTextarea: '写些什么吧~'
        })
      }
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
      // this.saveMsg();
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