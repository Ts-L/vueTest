import Vue from 'vue';
import Vuex from 'vuex';

// const store = new Vuex.Store({
//     state:{
//         count:15
//     },
//     mutations:{
//         add(state,n){
//             state.count += n;
//         },
//         reduce(state){
//             state.count --
//         }
//     },
//     getters: {
//         count:function(state){
//             return state.count += 100;
//         }
//     }
// })



 Vue.use(Vuex);

//state 状态对象
const state = {
    count:15
}

const mutations={
    add(state,n){
        state.count += n;
    },
    reduce(state){
        state.count --
    }
}

const getters = {
    count:function(state){
        return state.count += 0;
    }
}

const actions = {
     addActions(context){
         context.commit('add',10);
         setTimeout(() => {context.commit('reduce')}, 3000);
     },
     reduceActions({ commit }) {
        commit('reduce')
      }

}

const store = new Vuex.Store({
    state: {

    },
    mutations: {

    },
    getters: {
        
    }
})

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})