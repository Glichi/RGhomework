/*
 * @Author: your name
 * @Date: 2020-10-27 11:10:26
 * @LastEditTime: 2020-10-27 15:43:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\components\myPageItem\myPageItem.js
 */
// components/myPageItem/myPageItem.js
Component({
    options: {
      multipleSlots: true
    },  // 在组件定义时的选项中启用多slot支持
    /**
     * 组件的属性列表
     */
    properties: {
      title: {
        type: String,
        value: ''
      },
      url: {
        type: String,
        value: ''
      }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
      gotoPage(){
        var that = this;
        if(that.data.url == '' || that.data.url.length == 0){
          return;
        }
        wx.navigateTo({
          url: that.data.url
        })
      }
    }
})
