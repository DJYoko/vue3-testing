import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'

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
      } catch (err: any) {
        if (err instanceof AxiosError) {
          throw new Error(err.message)
        } else {
          throw new Error('An unexpected error occurred')
        }
      }
    },
  },
})
