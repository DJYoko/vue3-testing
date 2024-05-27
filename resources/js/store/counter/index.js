import { defineStore } from 'pinia'

export const counterStore = defineStore('counter', {
  state: () => ({
    total: 0,
  }),
  actions: {
    increment() {
      // axios
      this.total++
    },
    decrement() {
      this.total--
    },
  },
})
