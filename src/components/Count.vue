<template>
  <div class="hi">
    <h1>{{msg}}</h1>
    <!-- $store.state.count原始的  转化为  count -->
    <p>{{count}}</p>
    <div>
        <!-- <button @click="$store.commit('add' ,10)">+</button> -->
        <button @click="add(10)">+</button>
        <button @click="reduce">-</button>
    </div>

    <div>
        <button @click="addActions">+</button>
        <button @click="reduceActions">-</button>
    </div>

    <ul>
      <li 
      v-for="(item, index) in nums" 
      :key="item"
      :class="{active: currentIndex === index}"
      @click="liClick(index)"
      >{{item}}</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import store from '@/vuex/store'

import {mapState, mapMutations ,mapGetters, mapActions} from 'vuex'
export default {
  name: 'hi',
  data () {
    return {
      msg: 'hello vuex',
      nums: ['111111', '22222', '33333'],
      currentIndex: 0
    }
  },

    //第三种简化方法 $store.state.count原始的  转化为  count
    computed:{
        ...mapState(['count']),
        // count(){
        //     return this.$store.getters.count;
        // },
        ...mapGetters(['count'])
    },

    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addActions','reduceActions']),
        liClick(index){
          this.currentIndex = index
        }
    },

  store
}
</script>

<style scoped>
    .active{
      color: red;
    }
</style>
