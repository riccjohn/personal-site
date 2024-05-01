import { render, screen } from '@testing-library/react'
import HelloWorld from './HelloWorld'

describe('HelloWorld', () => {
  test(`Displays the text 'Hello, World!'`, () => {
    render(<HelloWorld />)

    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })
})
