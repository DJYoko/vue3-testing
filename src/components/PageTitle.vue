<script setup>
import pageProps from '@/props/pageProps';
const props = defineProps(pageProps);
</script>

<template>
  <h1 v-if="glade === 1">{{ titleText }}</h1>
  <h2 v-if="glade === 2">{{ titleText }}</h2>
  <h3 v-if="glade === 3">{{ titleText }}</h3>
  <h4 v-if="glade === 4">{{ titleText }}</h4>
  <h5 v-if="glade === 5">{{ titleText }}</h5>
  <h6 v-if="glade === 6">{{ titleText }}</h6>
</template>
