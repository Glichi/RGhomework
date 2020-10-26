// pages/homePage/homePage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    getuserinfo(val){
      // console.log(val)

      var app = getApp();
      // wx.getSetting({
      //   success(res){
      //     console.log(res);
          // if(res.authSetting['scope.userInfo']){
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function(res){
                console.log(res)
                var usermsg=res.userInfo;
                wx.showLoading({
                  title: '登录中'
                });
                wx.login({
                  success(res){
                    console.log(res);
                    if(res.code){
                      console.log('登录成功');
                      const userInfo=usermsg;
                      wx.setStorageSync("userInfo", userInfo);   //把用户信息存进缓存
                      app.globalData.userInfo=userInfo;  //把用户信息放进全局变量
                      wx.hideLoading();
                      if(app.globalData.userInfo!=null){
                        //登录接口
                      }
                    }else{
                      Toast.fail('登录失败');
                    }
                  }
                })
              },
              fail: function(){
                wx.showToast({
                  title: '授权失败',
                  icon: 'none',
                  duration: 1000
                })
              }
            })
      //     }else{
      //       wx.showToast({
      //         title: '授权失败',
      //         icon: 'none',
      //         duration: 1000
      //       })
      //     }
      //   }
      // })
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