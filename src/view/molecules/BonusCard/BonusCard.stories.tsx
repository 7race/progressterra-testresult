import { BonusCard } from './BonusCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BonusCard> = {
  title: 'molecules/BonusCard',
  component: BonusCard,
};

export default meta;
type Story = StoryObj<typeof BonusCard>;

export const Index: Story = {
  args: {
    currentQuantity: 10,
    dateBurning: '2024-02-27T18:18:00',
    forBurningQuantity: 5,
  },
};
