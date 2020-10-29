/*
 * @Author: your name
 * @Date: 2020-10-27 17:01:24
 * @LastEditTime: 2020-10-29 19:22:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\components\letterItem\letterItem.js
 */
// components/letterItem/letterItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      id: {
        type: Number,
        value: 0
      },
      imageUrl: {
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
      letterTitle: {
        type: String,
        value: ''
      },
      state: {
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

    }
})
