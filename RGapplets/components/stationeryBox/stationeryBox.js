/*
 * @Author: your name
 * @Date: 2020-10-27 17:32:40
 * @LastEditTime: 2020-10-30 20:47:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\components\stationeryBox\stationeryBox.js
 */
// components/stationeryBox/stationeryBox.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Component({

    options:{
      styleIsolation: 'shared'
    },
    /**
     * 组件的属性列表
     */
    properties: {
      checkedImageId: {
        type: Number,
        value: -1
      }
    },

    /**
     * 组件的初始数据
     */
    data: {
      stationeryList: [
        {
          id: 1,
          imageSrc: '/assest/img/111.png'
        },
        {
          id: 2,
          imageSrc: '/assest/img/111.png'
        },
        {
          id: 3,
          imageSrc: '/assest/img/111.png'
        },
        {
          id: 4,
          imageSrc: '/assest/img/111.png'
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
          });
        }
        this.triggerEvent("nextToWrite", that.data.setectImageId);
      }
    },

    // 生命周期
    lifetimes: {
      // 在组件实例进入页面节点树时执行
      attached(){
        if(this.properties.checkedImageId != ''){
          this.setData({
            setectImageId: this.properties.checkedImageId
          })
        }
      }
    }
})
