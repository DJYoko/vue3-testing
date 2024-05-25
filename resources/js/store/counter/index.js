import { defineStore } from 'pinia'

export const counterStore = defineStore('counter', {
  state: () => ({
    total: 0,
  }),
  actions: {
    increment() {
      this.total++
    },
    decrement() {
      this.total--
    },
  },
})
