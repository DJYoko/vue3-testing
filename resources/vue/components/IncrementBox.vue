<script setup>
import { reactive, computed } from 'vue'
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
  <div class="incrementBox">
    <p>increment box</p>
    <div>
      count:
      <span
        :class="isMinus ? 'textRed' : null"
        class="countNumber"
        data-testid="countNumberElement"
        >{{ counter.total }}</span
      >
    </div>
    <button @click="increment">increment</button>&nbsp;
    <button @click="decrement">decrement</button>
  </div>
</template>

<style lang="scss">
.incrementBox {
  border: 1px solid #ccc;
  padding: 20px;

  .textRed {
    color: #ff0000;
  }
}
</style>
