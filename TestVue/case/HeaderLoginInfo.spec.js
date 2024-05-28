import { render } from '@testing-library/vue'
import HeaderLoginInfo from '@/vue/layout/HeaderLoginInfo'

test('displays message', () => {
  const { getByText } = render(HeaderLoginInfo, {
    props: { userName: 'Testing User Name' },
  })
  getByText('Testing User Name')
})
