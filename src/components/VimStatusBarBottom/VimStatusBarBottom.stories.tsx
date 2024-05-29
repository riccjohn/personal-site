import type { Meta, StoryObj } from '@storybook/react'
import VimStatusBarBottom from '.'

const meta: Meta<typeof VimStatusBarBottom> = {
  component: VimStatusBarBottom,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VimStatusBarBottom>

export const Primary: Story = {}

export const Custom: Story = {
  args: {
    mode: 'INSERT',
    branchName: '123-test',
  },
}
