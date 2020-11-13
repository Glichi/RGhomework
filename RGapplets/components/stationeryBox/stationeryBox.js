/*
 * @Author: your name
 * @Date: 2020-10-27 17:32:40
 * @LastEditTime: 2020-11-13 21:36:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\components\stationeryBox\stationeryBox.js
 */
// components/stationeryBox/stationeryBox.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'

import {getAllSrc} from '../../api/getAllSrc'
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
        // {
        //   id: 1,
        //   imageSrc: '/assest/img/111.png'
        // },
        // {
        //   id: 2,
        //   imageSrc: 'https://i.loli.net/2020/11/03/7AifnqLBrgmdNDs.png'
        // },
        // {
        //   id: 3,
        //   imageSrc: 'https://i.loli.net/2020/11/03/OYl5VWJ4wvtk2uP.png'
        // },
        // {
        //   id: 4,
        //   imageSrc: 'https://i.loli.net/2020/11/03/bnDzVJSXG94QMvK.png'
        // }
      ],
      setectImageId: '',
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
        var selectObj = that.data.stationeryList.filter( item => {
          if(item.id == that.data.setectImageId){
            return item;
          }
        })
        this.triggerEvent("nextToWrite", selectObj);
      },

      // 获取所有样式【接口】
      getAllLetterSrc(){
        var that = this;
        getAllSrc().then( res => {
          console.log(res);
          if(res.status == 20000){
            var list = []
            for(var item of res.data.envelopeStyles){
              var obj = {
                id: item.id,
                imageSrc: item.urlPaper
              }
              list.push(obj);
            }
            that.setData({
              stationeryList: list
            });
          }
        }).catch( err => {
          console.log(err);
        })
      }
    },

    // 生命周期
    lifetimes: {
      // 在组件实例进入页面节点树时执行
      attached(){
        var that = this;
        that.getAllLetterSrc();
        if(that.properties.checkedImageId != ''){
          that.setData({
            setectImageId: that.properties.checkedImageId
          })
        }
      }
    }
})
