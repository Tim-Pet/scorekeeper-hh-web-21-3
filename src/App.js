import { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import Navigation from './components/Navigation'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'
import PlayPage from './pages/PlayPage'

function App() {
  const [game, setGame] = useState({})
  const [gameHistory, setGameHistory] = useState([])
  const [activePage, setActivePage] = useState('play')

  const pages = [
    { title: 'Play', id: 'play' },
    { title: 'History', id: 'history' },
  ]

  return (
    <>
      <Header>{activePage}</Header>
      <Switch>
        <Route exact path="/">
          <Redirect to={`/${activePage}`} />
        </Route>
        <Route exact path="/play">
          <PlayPage
            handleGameSubmit={handleGameSubmit}
            activePage={activePage}
            handleNavigate={setActivePage}
          />
          <Navigation
            onNavigate={setActivePage}
            pages={pages}
            currentPageId={activePage}
          />
        </Route>
        <Route path="/game">
          <GamePage
            game={game}
            updateScore={updateScore}
            handleEndGame={handleEndGame}
          />
        </Route>
        <Route exact path="/history">
          <HistoryPage
            gameHistory={gameHistory}
            activePage={activePage}
            handleNavigate={setActivePage}
          />
          <Navigation
            onNavigate={setActivePage}
            pages={pages}
            currentPageId={activePage}
          />
        </Route>
      </Switch>
    </>
  )

  function handleGameSubmit(gameName, playerNames) {
    const players = playerNames.split(',').map(player => {
      return { name: player.trim(' '), score: 0 }
    })
    setGame({ gameName: gameName, players })
    setActivePage('game')
  }

  function handleEndGame() {
    const currentGame = { ...game, id: uuidv4() }
    setGameHistory([...gameHistory, currentGame])
    setActivePage('history')
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
