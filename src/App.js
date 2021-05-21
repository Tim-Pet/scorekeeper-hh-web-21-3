import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import PlayPage from './pages/PlayPage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'
import Navigation from './components/Navigation'
import Header from './components/Header'

function App() {
  const [game, setGame] = useState({})
  const [gameHistory, setGameHistory] = useState([])
  const [activePage, setActivePage] = useState('play')

  const pages = [
    { title: 'Play', id: 'play' },
    { title: 'History', id: 'history' },
  ]

  return (
    <Container>
      <Header>{activePage}</Header>
      <Body>
        {activePage === 'play' && (
          <PlayPage
            handleGameSubmit={handleGameSubmit}
            activePage={activePage}
            handleNavigate={setActivePage}
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
            handleNavigate={setActivePage}
          />
        )}
      </Body>
      {activePage !== 'game' && (
        <Navigation
          onNavigate={setActivePage}
          pages={pages}
          currentPageId={activePage}
        />
      )}
    </Container>
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

const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: 60px auto 60px;
  position: fixed;
`
const Body = styled.section`
  overflow-y: auto;
  padding: 16px;
`
