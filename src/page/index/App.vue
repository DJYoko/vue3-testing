<script setup>
import { ref, reactive } from 'vue';
import PageTitle from '@/components/PageTitle';
import TextStyle from '@/components/TextStyle';
const props = defineProps({
  sampleValue: {
    type: String,
    default: 'default default',
  },
});
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
    <p>{{ sampleValue }}</p>
    <PageTitle titleText="PageTitle component h1" :glade="1" />
    <PageTitle titleText="PageTitle component h2" :glade="2" />
    <PageTitle titleText="PageTitle component h3" :glade="3" />
    <PageTitle titleText="PageTitle component h4" :glade="4" />
    <PageTitle titleText="PageTitle component h5" :glade="5" />
    <PageTitle titleText="PageTitle component h6" :glade="6" />
    <TextStyle titleText="TextStyle component glade 1" :glade="1" />
    <TextStyle titleText="TextStyle component glade 2" :glade="2" />
    <TextStyle titleText="TextStyle component glade 3" :glade="3" />
    <TextStyle titleText="TextStyle component glade 4" :glade="4" />
    <TextStyle titleText="TextStyle component glade 5" :glade="5" />
    <TextStyle titleText="TextStyle component glade 6" :glade="6" />
    <p>Entry: Index 1</p>
    <button @click="increment">Count is: {{ count }}</button>
    <div v-show="large()">Count is Large now!</div>
  </div>
</template>

<style lang="scss"></style>
