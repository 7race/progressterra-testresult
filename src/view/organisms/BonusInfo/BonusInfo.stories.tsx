import { BonusInfo } from './BonusInfo';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BonusInfo> = {
  title: 'organisms/BonusInfo',
  component: BonusInfo,
};

export default meta;
type Story = StoryObj<typeof BonusInfo>;

export const Index: Story = {
  render: () => <BonusInfo />,
};
