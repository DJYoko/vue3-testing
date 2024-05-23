<script setup>
import { ref, reactive } from 'vue';
import PageTitle from '@/components/PageTitle.vue';

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
    <PageTitle titleText="PageTitle component h1" :glade="1" />
    <PageTitle titleText="PageTitle component h2" :glade="2" />
    <PageTitle titleText="PageTitle component h3" :glade="3" />
    <PageTitle titleText="PageTitle component h4" :glade="4" />
    <PageTitle titleText="PageTitle component h5" :glade="5" />
    <PageTitle titleText="PageTitle component h6" :glade="6" />
    <p>Entry: Index 1</p>
    <button @click="increment">Count is: {{ count }}</button>
    <div v-show="large()">Count is Large now!</div>
  </div>
</template>

<style lang="scss"></style>
