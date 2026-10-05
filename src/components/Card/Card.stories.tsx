
import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Card } from './index.ts';

export const ActionsData = {
  onClick: fn(),
};

const meta = {
  component: Card,
  title: 'Card',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const cardContent = () => (
  <div>
    <h2>Card Title</h2>
    <p>This is some content inside the card.</p>
  </div>
);

export const Default: Story = {
  args: {
    children: cardContent(),
  }
};

