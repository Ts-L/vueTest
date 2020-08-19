<template>
  <div class="hi1">
    <h1>{{ msg }}--{{ $route.params.username }}--{{ $route.params.id }}</h1>

  </div>
</template>

<script>
export default {
  name: 'hi1',
  data () {
    return {
      msg: '这是789页面'
    }
  }
}
</script>

<style scoped>
    
</style>
