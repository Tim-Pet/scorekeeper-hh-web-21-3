import { render, screen } from '@testing-library/react'
import HistoryPage from './HistoryPage'

describe('HistoryPage', () => {
  const gameHistoryEl = [
    {
      gameName: 'Carcassonne',
      players: [
        { name: 'PlayerOne', score: 1 },
        { name: 'PlayerTwo', score: 2 },
      ],
      id: 1,
    },
    {
      gameName: 'Chess',
      players: [
        { name: 'PlayerThree', score: 3 },
        { name: 'PlayerFour', score: 4 },
      ],
      id: 2,
    },
  ]

  it('renders all games', async () => {
    render(<HistoryPage gameHistory={gameHistoryEl} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(4)
  })
})
