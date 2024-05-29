import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeAll(() => {
    vitest.useFakeTimers().setSystemTime(new Date('December 09, 1987 15:24:00'))
  })

  afterAll(() => {
    vitest.useRealTimers()
  })

  test('displays a navigation panel', () => {
    render(<App />)

    expect(screen.getByRole('navigation')).toBeVisible()
  })

  test('displays the current time', () => {
    render(<App />)

    expect(screen.getByText(/3:24 PM/))
  })
})
