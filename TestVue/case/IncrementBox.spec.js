import { render } from '@testing-library/vue'
import IncrementBox from '@/vue/component/IncrementBox'
import { setActivePinia, createPinia } from 'pinia'
import { storeCounter } from '@/js/store/counter'

test('displays title', () => {
  // Pinia Store
  const _pinia = createPinia()
  setActivePinia(_pinia)

  // setup Store
  const STORE_COUNTER = storeCounter()
  STORE_COUNTER.total = Math.floor(Math.random() * 10)

  const { getByTestId } = render(IncrementBox, {
    global: {
      plugins: [_pinia], // set store as global plugin
    },
  })

  // check element
  const _element = getByTestId('countNumberElement')
  expect(_element).toBeInTheDocument()
  expect(_element).toHaveTextContent(`${STORE_COUNTER.total}`)
  expect(_element).toHaveClass('countNumber')
})
