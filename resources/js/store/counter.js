import { defineStore } from 'pinia'
import axios from 'axios'

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
    async load() {
      // axios sample
      try {
        const { data } = await axios.get('/api/getData')
        this.total = data.responseTotal
        return data // { message: "Real response!" }
      } catch (err) {
        throw new Error(err.message)
      }
    },
  },
})
