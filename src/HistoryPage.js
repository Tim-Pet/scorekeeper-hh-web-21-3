import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import HistoryEntry from './components/HistoryEntry'
import Navigation from './components/Navigation'

const HistoryPage = ({ gameHistory, activePage, handleNavigate }) => {
  return (
    <AppContainer>
      <Header>History</Header>
      <Main>
        {gameHistory.map(gameEntry => (
          <HistoryEntry
            nameOfGame={gameEntry.gameName}
            players={gameEntry.players}
          />
        ))}
      </Main>
      <Navigation
        currentPageId={activePage}
        onNavigate={handleNavigate}
        pages={[
          { title: 'Play', id: 'play' },
          { title: 'History', id: 'history' },
        ]}
      />
    </AppContainer>
  )
}

export default HistoryPage

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;
  width: 100vw;
  position: fixed;
`

const Main = styled.main`
  overflow-y: auto;
  padding: 16px;
`
