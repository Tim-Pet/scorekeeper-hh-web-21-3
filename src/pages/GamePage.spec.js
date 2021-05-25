import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import GamePage from './GamePage'

describe('GamePage', () => {
  const gameEl = {
    gameName: 'Carcassonne',
    players: [
      { name: 'PlayerOne', score: 1 },
      { name: 'PlayerTwo', score: 2 },
    ],
  }

  const testFunc = jest.fn()

  it('renders the current game', async () => {
    render(
      <GamePage game={gameEl} updateScore={testFunc} handleEndGame={testFunc} />
    )
    expect(screen.getByRole('heading').innerHTML).toMatch(/Carcassonne/)
    expect(screen.getByText('PlayerOne')).toBeTruthy()
    expect(screen.getByText('PlayerTwo')).toBeTruthy()
    expect(screen.getAllByText('-')).toHaveLength(2)
    expect(screen.getAllByText('+')).toHaveLength(2)
    expect(screen.getByText('1')).toBeTruthy()
    expect(screen.getByText('2')).toBeTruthy()
  })

  it('Scoreupdate gets called according to action', () => {
    render(
      <GamePage game={gameEl} updateScore={testFunc} handleEndGame={testFunc} />
    )
    const buttonsMinus = screen.getAllByText('-')
    const buttonsPlus = screen.getAllByText('+')

    userEvent.click(buttonsMinus[0])
    expect(testFunc).toHaveBeenCalledWith(0, -1)
    userEvent.click(buttonsMinus[1])
    expect(testFunc).toHaveBeenCalledWith(1, -1)
    userEvent.click(buttonsPlus[0])
    expect(testFunc).toHaveBeenCalledWith(0, 1)
    userEvent.click(buttonsPlus[1])
    expect(testFunc).toHaveBeenCalledWith(1, 1)
  })

  it('Ends game upon click and redirects to historyPage', () => {
    const history = createMemoryHistory()

    render(
      <Router history={history}>
        <GamePage
          game={gameEl}
          updateScore={testFunc}
          handleEndGame={testFunc}
        />
      </Router>
    )

    const buttonEnd = screen.getByText('End game')

    userEvent.click(buttonEnd)

    expect(history.length).toBe(2)
    expect(history.location.pathname).toBe('/history')
  })
})
