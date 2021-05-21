import React from 'react'
import styled from 'styled-components'
import Game from '../components/Game'
import Button from '../components/lowLevel/Button'

const GamePage = ({ game, updateScore, handleEndGame }) => {
  return (
    <>
      <Game game={game} onMinus={updateScore} onPlus={updateScore} />
      <EndButton onClick={handleEndGame}>End game</EndButton>
    </>
  )
}

export default GamePage

const EndButton = styled(Button)`
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translate(-50%);
  width: 80%;
`
