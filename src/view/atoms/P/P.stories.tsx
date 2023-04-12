import { P } from './P';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof P> = {
  title: 'atoms/P',
  component: P,
};

export default meta;
type Story = StoryObj<typeof P>;

export const Index: Story = {
  args: {
    children: 'hello',
    variant: 'primary',
  },
};
