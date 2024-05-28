<script setup>
import { reactive, computed } from 'vue'
import { storeCounter } from '@/js/store/counter'
const STORE_COUNTER = storeCounter()

const increment = () => {
  STORE_COUNTER.increment()
}
const decrement = () => {
  STORE_COUNTER.decrement()
}

const isMinus = computed(() => {
  return STORE_COUNTER.total < 0
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
        >{{ STORE_COUNTER.total }}</span
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
