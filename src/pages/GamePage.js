import React from 'react'
import styled from 'styled-components'
import Button from '../components/lowLevel/Button'
import Game from '../components/Game'
import Header from '../components/Header'

const GamePage = ({ game, updateScore, handleEndGame }) => {
  return (
    <Container>
      <Header>History</Header>
      <Body>
        <Game game={game} onMinus={updateScore} onPlus={updateScore} />
      </Body>
      <Button onClick={handleEndGame}>End game</Button>
    </Container>
  )
}

export default GamePage

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
