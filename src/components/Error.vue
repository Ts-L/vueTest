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
      msg: 'Error:404'
    }
  }
}
</script>

<style scoped>
    
</style>
