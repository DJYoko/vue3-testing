import { render } from '@testing-library/vue'
import TextStyle from '@/vue/component/TextStyle'

test('displays title', () => {
  const { getByText } = render(TextStyle, {
    props: { titleText: 'sample text' },
  })
  getByText('sample text')
})
