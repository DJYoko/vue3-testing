<script setup>
const props = defineProps({
  userName: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <p class="headerLoginInfo">{{ userName }}</p>
</template>

<style lang="scss">
.headerLoginInfo {
  padding: 12px;
  border: 1px solid #ddd;
}
</style>
