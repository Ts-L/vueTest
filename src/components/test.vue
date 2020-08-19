<template>
  <div>
    <div v-if="books.length">
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>书籍名称</th>
            <th>日期</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in books" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.date}}</td>
            <td>{{item.price}}</td>
            <td>
              <button @click="add(item.count++)">+</button>
              {{item.count}}
              <button
                @click="reduce(item.count--)"
                :disabled="item.count <= 1"
              >-</button>
            </td>
            <td>
              <button @click="remove(index)">移除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>总价格：{{allPrice}}</h2>
    </div>
    <h2 v-else>购物车为空</h2>

    
    <router-view />
  </div>
</template>

<script>

const nums = [10,50,30,60,110,150,20]

//箭头函数
let total = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue, n)=> preValue + n);
console.log(total)

//v-model 在结合单选框使用的时候 对应的是boolean值 在结合复选框使用的时候  对应的是数组




// import { filter } from 'vue/types/umd';
export default {
  name: "hi",
  data() {
    return {
      books: [
        {
          id: 1,
          name: "c++",
          date: "2020-7",
          price: "5.00",
          count: 1,
        },
        {
          id: 2,
          name: "javascript",
          date: "2020-7",
          price: "2.00",
          count: 1,
        },
        {
          id: 3,
          name: "css",
          date: "2020-7",
          price: "3.00",
          count: 1,
        },
        {
          id: 4,
          name: "html5",
          date: "2020-7",
          price: "4.00",
          count: 1,
        },
      ],
      num1: 1,
      num2: 0
    };
  },
  computed:{
    allPrice() {
      return this.books.reduce(function(preValue,book){
        return preValue + book.price * book.count
      },0)
      let allPrice = 0
      // for (let i = 0; i < this.books.length; i++) {
      //   allPrice += this.books[i].price * this.books[i].count
      // }
      // return allPrice
      //es6语法
      // for (let i in this.books) {
      //   allPrice += this.books[i].price * this.books[i].count
      // }
      // return allPrice

      for (let item of this.books) {
        allPrice += item.price * item.count
      }
      return allPrice
    }
  },
  methods: {
    remove(index) {
      this.books.splice(index, 1);
    },
  },
  filters: {},
};
</script>

<style scoped>
th {
  padding: 0 20px;
}
td {
  padding: 15px;
}
</style>
