import type { Meta, StoryObj } from '@storybook/react-vite'

import { Typewriter } from './index.ts'

export const ActionsData = {}

const meta = {
  args: {
    ...ActionsData,
  },
  component: Typewriter,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  title: 'Typewritter',
} satisfies Meta<typeof Typewriter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cursor: true,
    delay: 500,
    speed: 100,
    text: 'Hello, World!',
  },
}
