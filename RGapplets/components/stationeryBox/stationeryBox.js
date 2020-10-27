/*
 * @Author: your name
 * @Date: 2020-10-27 17:32:40
 * @LastEditTime: 2020-10-27 21:26:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\components\stationeryBox\stationeryBox.js
 */
// components/stationeryBox/stationeryBox.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Component({

    options:{
      styleIsolation: 'shared'
    },
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
      stationeryList: [
        {
          id: 1,
          imageSrc: '/assest/img/stationery1.png'
        },
        {
          id: 2,
          imageSrc: '/assest/img/stationery1.png'
        },
        {
          id: 3,
          imageSrc: '/assest/img/stationery1.png'
        },
        {
          id: 4,
          imageSrc: '/assest/img/stationery1.png'
        }
      ],
      setectImageId: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
      // 选择信纸 id
      onChange(event){
        var that = this;
        that.setData({
          setectImageId: event.detail
        })
        console.log(that.data.setectImageId)
      },

      // 确认选择
      chooseImage(){
        var that = this;
        if(that.data.setectImageId == ''){
          return wx.showToast({
            title: '请选择信纸',
            icon: 'none',
            duration: 2000
          })  //Toast.fail("请选择信纸");
        }
        
      }
    }
})
