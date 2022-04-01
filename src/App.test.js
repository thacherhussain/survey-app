import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import App from './App'

jest.useFakeTimers()

test('renders learn react link', () => {
  render(<App />)
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})

describe('Example', () => {
  it('should complete page 1', async () => {
    render(<App />)

    act(() => {
      jest.runAllTimers()
    })

    const name = screen.queryByPlaceholderText('Name (optional)')
    const email = screen.queryByPlaceholderText('Email (optional)')

    fireEvent.change(name, { target: { value: 'Danger Mouse' } })
    fireEvent.change(email, { target: { value: 'dm@adventures.com' } })

    act(() => {
      screen.getByText('Next').click()
    })

    await waitForElementToBeRemoved(name)
  })

  // it('should complete page 2 ', async () => {
  //   render(<App initialStep={2} />)
  // })
})
