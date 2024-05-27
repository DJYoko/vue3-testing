// tests/unit/counterStore.spec.js
import { setActivePinia, createPinia } from 'pinia'
import { counterStore } from '@/js/store/counter'

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
})
