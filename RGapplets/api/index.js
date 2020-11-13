/*
 * @Author: your name
 * @Date: 2020-10-21 21:58:25
 * @LastEditTime: 2020-11-13 17:16:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\api\index.js
 */
import {getToken, setToken, removeToken} from '../utils/cookie.js'

const baseUrl = 'https://temp.tanjiaming99.com:8080/listener';

const request= (url, options) => {
  var token=getToken();
  var header={};
  if(!token){
    header={
      'Content-Type': 'application/json; charset=UTF-8'
    }
  }else{
    header={
      'Content-Type': 'application/json; charset=UTF-8',
      'token': token
    }
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl+url,
      method: options.method,
      data: options.data,
      header:header,
      success(res){
        if(res.data.status == 20000){
          resolve(res.data);
        }else{
          reject(res.data)
        }
      },
      fail(err){
        reject(err.data);
      }
    })
  })
}

const get=(url, options={}) => {
  return request(url, { method: 'GET', data: options })
}

const post = (url, options) => {
  return request(url, { method: 'POST', data: options })
}

const put = (url, options) => {
  return request(url, { method: 'PUT', data: options })
}

// 不能声明DELETE（关键字）
const remove = (url, options) => {
  return request(url, { method: 'DELETE', data: options })
}

module.exports = {
  get,
  post,
  put,
  remove
}