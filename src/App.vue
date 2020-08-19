<template>
  <div id="app">
    <div>
      <button @click="goGo">前进</button>
      <button @click="goBack">后退</button>
      <button @click="goHome">返回首页</button>
    </div>
    <div>
      <router-link to="/">hello</router-link>--
      <router-link to="/home1">home1</router-link>--
      <router-link to="/hi">hi</router-link>--
      <!-- 路由传参 :to -->
      <!-- <router-link :to="{name:'hi1',params:{key:value}}" name="hi1">hi1</router-link>-- -->
      <!-- tag属性 tag="button" -->
      <!-- replace 禁用 浏览器前进 后退 -->
      <router-link :to="{name:'hi1',params:{username:'tony',id:'666'}}" name="hi1">hi1</router-link>--
      <router-link to="/hi/hi2" name="hi2">hi2</router-link>
      <!-- url 传参 -->
      <router-link to="/params/198/luyouchuancan" name="params">params</router-link>--

      <!-- vue-router 的重定向-redirect 直接改变路径值-->
      <router-link to="/goHome">goHome</router-link>--

      <!-- 重定向的时候传递参数  接受参数 -->
      <router-link to="/goparams/250/china nb" name="goparams">goparams</router-link>--

      <!-- alias别名 -->
      <router-link to="/newHi">newHi</router-link>--


      <!-- 404 -->
      <router-link to="/123132">404入口</router-link>--

      <!-- vuex -->
      <router-link to="/Count">Count入口</router-link>--


      <router-link to="/test">test入口</router-link>--


      <router-link to="/props">props入口</router-link>--
    </div>

    <!-- name 传参 -->
    <p>{{ $route.name }}</p>

    <!-- 路由的过渡动画 -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    goGo(){
      this.$router.go(1)
    },
    goHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
