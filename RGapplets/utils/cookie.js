/*
 * @Author: your name
 * @Date: 2020-10-21 21:54:14
 * @LastEditTime: 2020-10-21 21:58:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \RGapplets\utils\cookie.js
 */
const tokenKey = 'AllaySorrow_client';

export const setToken = (token) => wx.setStorageSync(tokenKey, token);
export const getToken = () => wx.getStorageSync(tokenKey);
export const removeToken = () => wx.removeStorageSync(tokenKey);