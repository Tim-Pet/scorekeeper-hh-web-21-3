import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import PlayPage from './PlayPage'

describe('PlayPage', () => {
  const testFunction = jest.fn()

  it('renders GameForm', async () => {
    render(<PlayPage handleGameSubmit={testFunction} />)
    expect(screen.getAllByRole('textbox')).toHaveLength(2)
    expect(screen.getAllByRole('button')).toHaveLength(1)
  })

  it('calls submit', async () => {
    const history = createMemoryHistory()

    render(
      <Router history={history}>
        <PlayPage handleGameSubmit={testFunction} />
      </Router>
    )
    const submitButton = screen.getByRole('button')
    userEvent.click(submitButton)
    expect(testFunction).toHaveBeenCalled()
  })

  it('Submit triggers path change', () => {
    const history = createMemoryHistory()

    render(
      <Router history={history}>
        <PlayPage handleGameSubmit={testFunction} />
      </Router>
    )

    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument()

    userEvent.click(submitButton)
    expect(history.length).toBe(2)
    expect(history.location.pathname).toBe('/game')
  })
})
