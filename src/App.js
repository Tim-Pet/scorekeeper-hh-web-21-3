import { useState } from 'react'
import './App.css'

import PlayPage from './PlayPage'
import GamePage from './GamePage'
import HistoryPage from './HistoryPage'

function App() {
  const [game, setGame] = useState({})
  const [gameHistory, setGameHistory] = useState([])
  const [activePage, setActivePage] = useState('play')

  return (
    <>
      {activePage === 'play' && (
        <PlayPage
          handleGameSubmit={handleGameSubmit}
          activePage={activePage}
          handleNavigate={handleNavigate}
        />
      )}
      {activePage === 'game' && (
        <GamePage
          game={game}
          updateScore={updateScore}
          handleEndGame={handleEndGame}
        />
      )}
      {activePage === 'history' && (
        <HistoryPage
          gameHistory={gameHistory}
          activePage={activePage}
          handleNavigate={handleNavigate}
        />
      )}
    </>
  )

  function handleGameSubmit(gameName, playerNames) {
    const players = playerNames.split(',').map(player => {
      return { name: player.trim(' '), score: 0 }
    })
    setGame({ gameName: gameName, players })

    setActivePage('game')
  }
  function handleNavigate(id) {
    setActivePage(id)
  }
  function handleEndGame() {
    setGameHistory([...gameHistory, game])
    setActivePage('history')
    setGame([])
  }

  function updateScore(index, value) {
    const playerToUpdate = game.players[index]
    const players = game.players
    const updatedPlayers = [
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + value },
      ...players.slice(index + 1),
    ]
    setGame({ ...game, players: updatedPlayers })
  }
}

export default App
