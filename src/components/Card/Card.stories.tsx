import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from './index.ts'

const meta = {
  component: Card,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  title: 'Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

const cardContent = () => (
  <div>
    <h2>Card Title</h2>
    <p>This is some content inside the card.</p>
  </div>
)

export const Default: Story = {
  args: {
    children: cardContent(),
  },
}
