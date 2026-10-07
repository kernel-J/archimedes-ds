import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  addons: [],
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
}
export default config
