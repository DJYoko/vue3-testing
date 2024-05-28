import { defineStore } from 'pinia'
import axios, { AxiosError, AxiosResponse } from 'axios'

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
    async load() {
      try {
        const { data }: AxiosResponse = await axios.get('/api/getData')
        this.total = data.responseTotal
        return data // { message: "Real response!" }
      } catch (err) {
        if (err instanceof AxiosError) {
          throw new Error(err.message)
        } else {
          throw new Error('An unexpected error occurred')
        }
      }
    },
  },
})
