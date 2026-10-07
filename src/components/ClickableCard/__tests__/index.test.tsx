import { render, screen } from '@testing-library/react'

import { ClickableCard } from '../index'

describe('ClickableCard component', () => {
  test('renders card component', () => {
    render(
      <ClickableCard>
        <div>Test Card</div>
      </ClickableCard>
    )

    const cardElement = screen.getByText(/Test Card/i)
    expect(cardElement).toBeInTheDocument()
  })

  test('calls onClick when card is clicked', () => {
    const handleClick = jest.fn()
    render(
      <ClickableCard onClick={handleClick}>
        <div>Clickable Card</div>
      </ClickableCard>
    )

    const cardElement = screen.getByText(/Clickable Card/i)
    cardElement.click()

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
