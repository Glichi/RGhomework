/*
 * @Author: your name
 * @Date: 2020-10-29 21:15:06
 * @LastEditTime: 2020-10-30 10:24:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\components\successSend\successSend.js
 */
// components/successSend/successSend.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
      second: 3,
      timer: null,  // 计时器
    },

    // 生命周期
    lifetimes: {
      attached(){
        var that = this;
        that.data.timer = setInterval( () => {
          that.setData({
            second: that.data.second - 1
          });
          if(that.data.second == 0){
            clearInterval(that.data.timer);
            this.triggerEvent("restart");  // 发送成功，回到第一步
            console.log('stop')
          }
        }, 1000)
      }
    },

    /**
     * 组件的方法列表
     */
    methods: {
      
    }
})
