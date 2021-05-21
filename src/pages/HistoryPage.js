import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import HistoryEntry from '../components/HistoryEntry'
import Navigation from '../components/Navigation'

const HistoryPage = ({ gameHistory, activePage, handleNavigate }) => {
  return (
    <Container>
      <Header>History</Header>
      <Body>
        {gameHistory.map(gameEntry => (
          <HistoryEntry
            key={gameEntry.id}
            nameOfGame={gameEntry.gameName}
            players={gameEntry.players}
          />
        ))}
      </Body>
      <Navigation
        currentPageId={activePage}
        onNavigate={handleNavigate}
        pages={[
          { title: 'Play', id: 'play' },
          { title: 'History', id: 'history' },
        ]}
      />
    </Container>
  )
}

export default HistoryPage

const Container = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;
  width: 100vw;
  position: fixed;
`

const Body = styled.section`
  overflow-y: auto;
  padding: 16px;
`
