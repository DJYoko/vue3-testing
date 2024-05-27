<script setup>
import { reactive, computed } from 'vue'
// import store from '@/js/store'
// const counter = store.counterStore()

// 以下の手法でもインポートできるが全機能をそれぞれ記述することになる
// ここは他メンバーと相談
import { counterStore } from '@/js/store/counter'
const counter = counterStore()

const increment = () => {
  counter.increment()
}
const decrement = () => {
  counter.decrement()
}

const isMinus = computed(() => {
  return counter.total < 0
})
</script>

<template>
  <div class="IncrementBox">
    <p>increment box</p>
    <div>
      count: <span :class="isMinus ? 'textRed' : null">{{ counter.total }}</span>
    </div>
    <button @click="increment">increment</button>&nbsp;
    <button @click="decrement">decrement</button>
  </div>
</template>

<style lang="scss">
.IncrementBox {
  border: 1px solid #ccc;
  padding: 20px;

  .textRed {
    color: #ff0000;
  }
}
</style>
