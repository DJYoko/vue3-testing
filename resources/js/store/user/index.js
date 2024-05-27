import { defineStore } from 'pinia'

export const userStore = defineStore({
  state: () => ({
    name: '',
    id: '',
    role: '',
  }),
  actions: {},
})
