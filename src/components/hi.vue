<template>
  <div class="hi">
    <h2>{{ msg }}</h2>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: '这是hi页面456 你好啊 2020-06-11'
    }
  }
}
</script>

<style scoped>
    
</style>
