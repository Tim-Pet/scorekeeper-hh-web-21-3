import React from 'react'
import styled from 'styled-components'
import GameForm from '../components/GameForm'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

const PlayPage = ({ handleGameSubmit, activePage, handleNavigate }) => {
  return (
    <AppContainer>
      <Header>New Game</Header>
      <Main>
        <GameForm onSubmit={handleGameSubmit} />
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

export default PlayPage

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
