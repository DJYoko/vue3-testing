import { render } from '@testing-library/vue'
import CSwitch from '@/vue/component/CSwitch'

test('display default', () => {
  const SAMPLE_TEXT = 'sample sample'
  const { getByText, getByTestId } = render(CSwitch, {
    props: { labelText: SAMPLE_TEXT },
  })
  getByText(SAMPLE_TEXT)

  const _element = getByTestId('CSwitch')
  expect(_element).toBeInTheDocument()
  expect(_element).toHaveTextContent(SAMPLE_TEXT)
  expect(_element).toHaveClass('c-switch')

  const inputElement = _element.querySelector('.c-switch__input')
  expect(inputElement.checked).toBe(false)
})

test('display checked', () => {
  const SAMPLE_TEXT = 'sample sample'
  const { getByText, getByTestId } = render(CSwitch, {
    props: { labelText: SAMPLE_TEXT, isChecked: true },
  })
  getByText(SAMPLE_TEXT)

  const _element = getByTestId('CSwitch')
  const inputElement = _element.querySelector('.c-switch__input')
  expect(inputElement.checked).toBe(true)
})
