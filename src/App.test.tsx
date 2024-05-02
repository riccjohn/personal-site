import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('displays a navigation panel', () => {
    render(<App />)

    expect(screen.getByRole('navigation')).toBeVisible()
  })
})
