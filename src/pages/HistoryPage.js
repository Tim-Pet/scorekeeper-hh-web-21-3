import React from 'react'
import HistoryEntry from '../components/HistoryEntry'

const HistoryPage = ({ gameHistory }) => {
  return (
    <>
      {gameHistory.map(gameEntry => (
        <HistoryEntry
          key={gameEntry.id}
          nameOfGame={gameEntry.gameName}
          players={gameEntry.players}
        />
      ))}
    </>
  )
}

export default HistoryPage
