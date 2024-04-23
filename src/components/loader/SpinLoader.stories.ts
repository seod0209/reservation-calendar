import type { Meta, StoryObj } from '@storybook/react';
import SpinLoader from './SpinLoader';

const meta = {
  title: 'SpinLoader',
  component: SpinLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SpinLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
