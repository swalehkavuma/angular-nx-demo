import type { Meta, StoryObj } from '@storybook/angular';
import { DesignSystemLibComponent } from './design-system-lib.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DesignSystemLibComponent> = {
  component: DesignSystemLibComponent,
  title: 'DesignSystemLibComponent',
};
export default meta;
type Story = StoryObj<DesignSystemLibComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/design-system-lib works!/gi)).toBeTruthy();
  },
};
