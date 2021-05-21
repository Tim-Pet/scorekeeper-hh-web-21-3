import React from 'react'
import styled from 'styled-components'
import GameForm from '../components/GameForm'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

const PlayPage = ({ handleGameSubmit, activePage, handleNavigate }) => {
  return (
    <Container>
      <Header>New Game</Header>
      <Body>
        <GameForm onSubmit={handleGameSubmit} />
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

export default PlayPage

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
