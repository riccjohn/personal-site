import { render, screen } from '@testing-library/react'
import VimStatusBarBottom from './VimStatusBarBottom'

describe('VimStatusBarBottom', () => {
  beforeAll(() => {
    vitest.useFakeTimers().setSystemTime(new Date('December 09, 1987 15:24:00'))
  })

  afterAll(() => {
    vitest.useRealTimers()
  })

  describe('given no props', () => {
    test('displays the default mode', () => {
      render(<VimStatusBarBottom />)

      expect(screen.getByText(/NORMAL/i)).toBeVisible()
    })

    test('displays the default branch name', () => {
      render(<VimStatusBarBottom />)

      expect(screen.getByText(/main/i)).toBeVisible()
    })
  })

  describe('given props', () => {
    test('displays the mode', () => {
      render(<VimStatusBarBottom mode='INSERT' />)

      expect(screen.getByText(/INSERT/i)).toBeVisible()
      expect(screen.queryByText(/NORMAL/i)).not.toBeInTheDocument()
      expect(screen.getByText(/main/i)).toBeVisible()
    })

    test('displays the branch name', () => {
      render(<VimStatusBarBottom branchName='123-test' />)

      expect(screen.getByText(/123-test/)).toBeVisible()
      expect(screen.getByText(/NORMAL/)).toBeVisible()
    })
  })
  test('displays the current time', () => {
    render(<VimStatusBarBottom />)

    expect(screen.getByText(/3:24 PM/)).toBeVisible()
  })

  test(`displays 'Made with ❤ in Madison, WI'`, () => {
    render(<VimStatusBarBottom />)

    expect(screen.getByText(/Made with/)).toBeVisible()
    expect(screen.getByText(/Madison, WI/)).toBeVisible()
  })
})
