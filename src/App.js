import { useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import Navigation from './components/Navigation'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'
import PlayPage from './pages/PlayPage'

function App() {
  const [game, setGame] = useState({})
  const [gameHistory, setGameHistory] = useState([])
  const history = useHistory()
  const pages = [
    { title: 'Create', id: '/' },
    {
      title: 'History',
      id: 'history',
      disabled: !gameHistory.length,
    },
  ]

  return (
    <>
      <Header>playceholder</Header>
      <Switch>
        <Route exact path="/">
          <PlayPage handleGameSubmit={handleGameSubmit} />
        </Route>
        <Route path="/game">
          <GamePage
            game={game}
            updateScore={updateScore}
            handleEndGame={handleEndGame}
          />
        </Route>
        <Route path="/history">
          <HistoryPage gameHistory={gameHistory} />
        </Route>
      </Switch>
      <Route exact path={['/', '/history']}>
        <Navigation pages={pages} />
      </Route>
    </>
  )

  function handleGameSubmit(gameName, playerNames) {
    const players = playerNames.split(',').map(player => {
      return { name: player.trim(' '), score: 0 }
    })
    setGame({ gameName: gameName, players })
    history.push('game')
  }

  function handleEndGame() {
    const currentGame = { ...game, id: uuidv4() }
    setGameHistory([...gameHistory, currentGame])
    history.push('history')
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
