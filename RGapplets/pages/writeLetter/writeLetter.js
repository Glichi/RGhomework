/*
 * @Author: your name
 * @Date: 2020-10-24 15:40:58
 * @LastEditTime: 2020-11-09 18:48:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\writeLetter\writeLetter.js
 */
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
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
      letterSrc: 'https://i.loli.net/2020/10/29/Z7O9Laz423NegKP.png',
      letterTitle: '',  // 标题
      letterContent: '',  // 正文
      letterId: '',  // 信件id 用于回信 / 草稿箱
      to: '',  // 收送人（用于查看草稿箱【回信】）
      from: '',  // 发送人（用于查看草稿箱【回信】）
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
      console.log('保存成功');
      Toast.success('保存成功');
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
        var app = getApp();
        if(that.data.letterId != ''){  // 回信
          
        } else{  // 写信
          app.globalData.isSend = true;
          app.globalData.checkedImageId = '';
        }
        wx.navigateBack({
          delta: 1
        })
      }).catch( () => {
        console.log("no");
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
      if(!options.letterType){  // 是否从草稿箱中进入
        if(!options.letterId){  // 写信
          that.setData({
            btnText: '发送',
            placeholderTextarea: '写些什么吧~'
          })
        } else{  // 回信 看信
          that.setData({
            letterId: options.letterId,
            to: options.to,
            from: options.from,
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
      this.saveMsg();
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