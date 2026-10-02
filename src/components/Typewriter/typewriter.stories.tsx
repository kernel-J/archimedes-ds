
import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Typewriter } from './index.ts';

export const ActionsData = {
};

const meta = {
  component: Typewriter,
  title: 'Typewritter',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Typewriter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hello, World! how are you today',
    speed: 100,
    delay: 500,
    cursor: true,
  }
};