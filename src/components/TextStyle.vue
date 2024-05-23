<script setup>
import pageProps from '@/props/pageProps';
const props = defineProps(pageProps);
</script>

<template>
  <p :class="`is-level_${glade}`">{{ titleText }}</p>
</template>

<style lang="scss">
.is-level_1 {
  font-size: 10px;
}
.is-level_2 {
  font-size: 12px;
}
.is-level_3 {
  font-size: 14px;
}
.is-level_4 {
  font-size: 16px;
}
.is-level_5 {
  font-size: 18px;
}
.is-level_6 {
  font-size: 20px;
}
</style>
