import { defineStore } from 'pinia'
import axios, { AxiosError, AxiosResponse } from 'axios'

type UserModel = {
  name: string
  id: number
  role: string
}

export const userStore = defineStore('userStore', {
  state: (): UserModel => ({
    name: '',
    id: 0,
    role: '',
  }),
  actions: {
    setUser(_payload: UserModel) {
      this.name = _payload.name
      this.id = _payload.id
      this.role = _payload.role
    },
    async loadUser() {
      try {
        const { data }: AxiosResponse = await axios.get<UserModel>('/api/getData')
        this.setUser(data)
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
