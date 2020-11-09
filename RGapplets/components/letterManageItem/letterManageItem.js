/*
 * @Author: your name
 * @Date: 2020-11-09 16:21:52
 * @LastEditTime: 2020-11-09 19:52:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\components\letterManageItem\letterManageItem.js
 */

Component({
    /**
     * 组件的属性列表
     */
    properties: {
      titleTxt:{
        type: String,
        value: ''
      },
      time:{
        type: String,
        value: ''
      },
      envelope:{
        type: String,
        value: ''
      },
      from: {
        type: String,
        value: ''
      },
      to: {
        type: String,
        value: ''
      },
      letterId: {
        type: Number,
        value: 0
      },
      letterType:{
        type: Number,
        value: 0  // 1 -> 草稿箱  2 -> 收信件   3 -> 发信件
      }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    // 组件生命周期
    lifetimes:{
      attached(){
        
      }
    },

    /**
     * 组件的方法列表
     */
    methods: {
      // 进入详情页面
      gotoDetails(){
        var that = this;
        if(that.data.letterType == 1){
          wx.navigateTo({
            url: `/pages/writeLetter/writeLetter?letterType=${that.data.letterType}&letterId=${that.data.letterId}`,
          })
        } else{
          wx.navigateTo({
            url: `/pages/letterContent/letterContent?letterId=${that.data.letterId}&to=${that.data.to}&from=${that.data.from}&letterType=${that.data.letterType}`
          })
        }
      },

      // 删除信件
      delItem(){
        var that = this;
        this.triggerEvent("delItem", 'asd');  //that.data.letterId
      }
    }
})
