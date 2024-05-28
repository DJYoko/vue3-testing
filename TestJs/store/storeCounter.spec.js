// tests/unit/storeCounter.spec.js
import { setActivePinia, createPinia } from 'pinia'
import { storeCounter } from '@/js/store/counter'

jest.mock('axios')
import axios from 'axios'

describe('storeCounter', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with a total of 0', () => {
    const store = storeCounter()
    expect(store.total).toBe(0)
  })

  it('increments the total', () => {
    const store = storeCounter()
    store.increment()
    expect(store.total).toBe(1)
  })

  it('decrements the total', () => {
    const store = storeCounter()
    store.increment()
    store.decrement()
    expect(store.total).toBe(0)
  })

  it('load the total', async () => {
    const store = storeCounter()
    const mockAxios = axios
    const SAMPLE_RESPONSE = Math.floor(Math.random * 10)
    mockAxios.get.mockResolvedValue({ data: { responseTotal: SAMPLE_RESPONSE } })
    await store.load()
    expect(store.total).toBe(SAMPLE_RESPONSE)
  })
})
