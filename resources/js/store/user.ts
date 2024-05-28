import { defineStore } from 'pinia'

interface UserModel {
  name: string
  id: string
  role: string
}

export const userStore = defineStore('userStore', {
  state: (): UserModel => ({
    name: '',
    id: '',
    role: '',
  }),
  actions: {
    setUser(_payload: UserModel) {
      this.name = _payload.name
      this.id = _payload.id
      this.role = _payload.role
    },
  },
})
