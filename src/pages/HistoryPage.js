import React from 'react'
import { Container } from '../components/common/Container'
import Header from '../components/Header'
import HistoryEntry from '../components/HistoryEntry'

const HistoryPage = ({ gameHistory }) => {
  return (
    <Container>
      <Header>Game history</Header>
      {gameHistory.map(gameEntry => (
        <HistoryEntry
          key={gameEntry.id}
          nameOfGame={gameEntry.gameName}
          players={gameEntry.players}
        />
      ))}
    </Container>
  )
}

export default HistoryPage
