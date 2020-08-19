// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 123.207.32.32:8000/home/multidata
// 123.207.32.32:8000/home/data?type=sell&page=1
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: "get"
}).then( res => {
  // console.log(res);
})

// axios基本使用
axios({
  url: 'http://123.207.32.32:8000/home/data',
  method: "get",
  // 专门针对get请求的参数拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then( res => {
  // console.log(res);
})

// axios 全局配置

axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

// axios发送并发请求 （两个请求）
axios.all([axios({
  url: '/home/multidata',
}), axios({
  url: '/home/data',
  method: "get",
  params: {
    type: 'pop',
    page: 1
  } 
})]).then(axios.spread((res1, res2) => {
  // console.log(res1);
  // console.log(res2);
}))

// 创建对应的axios的实例
const instance = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

instance({
  url: '/home/data',
  method: "get",
  params: {
    type: 'pop',
    page: 1
  } 
}).then( res => {
  // console.log(res);
})

// 封装的axios 在具体的组件内调用
import {request} from "./utils/axios"

// request({
//   url: '/home/data',
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })
request({
  url: '/home/multidata',
}).then( res => {
  console.log(res);
}).catch( err => {
  console.log(err);
})