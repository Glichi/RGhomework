/*
 * @Author: your name
 * @Date: 2020-10-21 21:58:25
 * @LastEditTime: 2020-10-21 22:08:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\api\index.js
 */
import {getToken, setToken, removeToken} from '../utils/cookie.js'

const baseUrl = '';

const request = (url, options) => {
  var token = getToken();
  var header = {};
  if(!token){
    header = {
      'Content-Type': 'application/json; charset=UTF-8'
    };
  } else{
    header = {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': token
    }
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      data: options.data,
      method: options.method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: header, // 设置请求的 header
      success: function(res){
        if(res.data.code){
          resolve(res.data);
        } else{
          reject(res.data);
        }
      },
      fail: function() {
        reject(err.data);
      }
    })
  })
}

const get = (url, options={}) => {
  return request(url, {method: 'GET', data: options})
}

const post = (url, options) => {
  return request(url, {methods: 'POST', data: options})
}

const put = (url, options) => {
  return request(url, {methods: 'PUT', data: options});
}

// 不能声明DELETE（关键字）
const remove = (url, options) => {
  return request(url, {method: 'DELETE', data: options});
}

module.exports = {
  get,
  post,
  put,
  remove
}