/*
 * @Author: your name
 * @Date: 2020-11-03 15:04:40
 * @LastEditTime: 2020-11-09 18:37:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\pages\letterContent\letterContent.js
 */
// pages/letterContent/letterContent.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      statusBarHeight: getApp().globalData.statusBarHeight, // 导航栏的高度
      capsuleHeight: '',  // 右上角胶囊高度
      capsuleTop: '',  // 右上角胶囊上边界坐标
      capsuleBottom: '',  // 右上角胶囊下边界坐标
      letterSrc: 'https://i.loli.net/2020/10/29/Z7O9Laz423NegKP.png',
      letterTitle: '',  // 标题
      letterContent: '',  // 正文
      letterId: '',  // 信件id 用于看信
      letterType: '',  // 信件类型
      to: '',  // 收信人（一般都是自己）
      from: '',  // 寄信人
      time: '',  // 时间
    },

    // 返回上一页
    gotoback(){
      wx.navigateBack({
        delta: 1
      })
    },

    replyMsg(){
      var that = this;
      wx.navigateTo({
        url: `/pages/writeLetter/writeLetter?letterId=${that.data.letterId}&to=${that.data.to}&from=${that.data.from}`,
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
        capsuleBottom: capsuleObj.bottom,
        letterId: options.letterId,
        letterType: options.letterType ? options.letterType : 2,
        to: options.to,
        from: options.from,
        letterTitle: '啥标题啊我也不知道啊',
        letterContent: '新京报快讯（记者 谢莲）据CNN报道，当地时间11月3日凌晨，美国新罕布什尔州靠近加拿大的边境小镇Dixville Notch宣布了大选日第一批投票结果，民主党总统候选人拜登获得了所有5张选票。Dixville Notch是美国最早一批公布选举结果的地方之一，该地在2010年的人口普查中仅有12名居民。一般而言，当地投票站零点开放，选民则立即赶赴现场投票。在所有选票都计算后，该地就会率先公布结果。此时，美国大部分的地区投票站都还未开放。据BNO News报道，在Dixville Notch，拜登获得了所有5张选票，领先特朗普。但在新罕布什尔州Millsfield的第二批投票中，现任总统、共和党总统候选人特朗普获得了21张选票中的16张，领先拜登。传统上也是午夜开放投票站的Hart’s Location，因疫情影响改为白天投票，当地48名选民可以在白天前往投票站投票。一般而言，当地投票站零点开放，选民则立即赶赴现场投票。在所有选票都计算后，该地就会率先公布结果。此时，美国大部分的地区投票站都还未开放。据BNO News报道，在Dixville Notch，拜登获得了所有5张选票，领先特朗普。但在新罕布什尔州Millsfield的第二批投票中，现任总统、共和党总统候选人特朗普获得了21张选票中的16张，领先拜登。传统上也是午夜开放投票站的Hart’s Location，因疫情影响改为白天投票，当地48名选民可以在白天前往投票站投票。',
        time: '2020年11月3日'
      })
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