import React from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import Game from './components/Game'
import Header from './components/Header'

const GamePage = ({ game, updateScore, handleEndGame }) => {
  return (
    <AppContainer>
      <Header>History</Header>
      <Main>
        <Game game={game} onMinus={updateScore} onPlus={updateScore} />
      </Main>
      <Button onClick={handleEndGame}>End game</Button>
    </AppContainer>
  )
}

export default GamePage

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
