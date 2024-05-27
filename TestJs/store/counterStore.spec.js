// tests/unit/counterStore.spec.js
import { setActivePinia, createPinia } from 'pinia'
import { counterStore } from '@/js/store/counter'

jest.mock('axios')
import axios from 'axios'

describe('counterStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with a total of 0', () => {
    const store = counterStore()
    expect(store.total).toBe(0)
  })

  it('increments the total', () => {
    const store = counterStore()
    store.increment()
    expect(store.total).toBe(1)
  })

  it('decrements the total', () => {
    const store = counterStore()
    store.increment()
    store.decrement()
    expect(store.total).toBe(0)
  })

  it('load the total', async () => {
    const store = counterStore()
    const mockAxios = axios
    const SAMPLE_RESPONSE = Math.floor(Math.random * 10)
    mockAxios.get.mockResolvedValue({ data: { responseTotal: SAMPLE_RESPONSE } })
    await store.load()
    expect(store.total).toBe(SAMPLE_RESPONSE)
  })
})
