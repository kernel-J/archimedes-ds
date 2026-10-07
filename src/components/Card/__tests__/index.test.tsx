import { render, screen } from '@testing-library/react'

import { Card } from '../index'

describe('Card component', () => {
  test('renders card component', () => {
    render(
      <Card>
        <div>Test Card</div>
      </Card>
    )

    const cardElement = screen.getByText(/Test Card/i)
    expect(cardElement).toBeInTheDocument()
  })
})
