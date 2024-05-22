<style lang="scss"></style>

<script setup>
import { ref, reactive } from 'vue';
const count = ref(0);

function increment() {
  count.value++;
}

function large() {
  return count.value >= 10;
}
</script>

<template>
  <div class="indexPage">
    <h1>test page</h1>
    <p>Entry: Index 1</p>
    <button @click="increment">Count is: {{ count }}</button>
    <div v-show="large()">Count is Large now!</div>
  </div>
</template>
