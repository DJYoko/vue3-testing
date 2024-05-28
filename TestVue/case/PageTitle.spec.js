import { render } from '@testing-library/vue'
import PageTitle from '@/vue/component/PageTitle'

test('displays title', () => {
  const { getByText } = render(PageTitle, {
    props: { titleText: 'Testing User Name' },
  })
  getByText('Testing User Name')
})

for (let gladeIndex = 1; gladeIndex <= 6; gladeIndex++) {
  test(`renders h${gladeIndex}`, () => {
    const { getByRole } = render(PageTitle, {
      props: { glade: gladeIndex },
    })
    const header = getByRole('heading', { glade: gladeIndex })
    expect(header).toBeInTheDocument()
  })
}
