<template>
  <div class="params">
    <h2>{{ msg }}</h2>
    <p>newsId:{{$route.params.newsId}}</p>
    <p>newsTitle:{{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'params',
  data () {
    return {
      msg: '路由传参'
    }
  },
  beforeRouteEnter:(to,form,next) => {
      console.log("准备进入");
      next();
  },
  beforeRouteLeave:(to,form,next) => {
      console.log("准备离开");
      next();
  }
}
</script>

<style scoped>
    
</style>
