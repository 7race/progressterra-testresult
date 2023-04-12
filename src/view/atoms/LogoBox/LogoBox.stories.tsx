import { LogoBox } from './LogoBox';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LogoBox> = {
  title: 'atoms/LogoBox',
  component: LogoBox,
};

export default meta;
type Story = StoryObj<typeof LogoBox>;

export const Index: Story = {
  render: () => <LogoBox />,
};
