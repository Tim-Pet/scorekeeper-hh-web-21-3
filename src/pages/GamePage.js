import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/common/Button'
import { Container } from '../components/common/Container'
import Game from '../components/Game'

const GamePage = ({ game, updateScore, handleEndGame }) => {
  let history = useHistory()

  return (
    <Container>
      <Game game={game} onMinus={updateScore} onPlus={updateScore} />
      <EndButton onClick={handleClick}>End game</EndButton>
    </Container>
  )

  function handleClick(event) {
    handleEndGame(event)
    history.push('/history')
  }
}

export default GamePage

const EndButton = styled(Button)`
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translate(-50%);
  width: 80%;
`
