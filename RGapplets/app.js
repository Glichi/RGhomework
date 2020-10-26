/*
 * @Author: your name
 * @Date: 2020-10-20 19:47:01
 * @LastEditTime: 2020-10-26 22:33:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\app.js
 */
import Toast from './miniprogram_npm/@vant/weapp/toast/toast';
import {getToken, setToken, removeToken} from './utils/cookie'

App({
  globalData:{
    userInfo: {},  // 用户个人信息
  },

  //确认登录(获取用户信息)
  getuserinfo(){
    var that = this;
    // wx.getSetting({
    //   success(res){
    //     console.log(res);
    //     if(res.authSetting['scope.userInfo']){
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res){
              console.log(res);
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
                    that.globalData.userInfo=userInfo;  //把用户信息放进全局变量
                    wx.hideLoading();
                    if(that.globalData.userInfo!=null){
                      //登录接口
                    }
                  }else{
                    Toast.fail('登录失败');
                  }
                }
              })
            },
            fail: function(err){
              wx.openSetting({
                success(res){
                  console.log(res);
                }
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

  onLaunch: function () {
    // this.getuserinfo();
  },
  onShow: function(){
    // this.getuserinfo();
  }
  
})