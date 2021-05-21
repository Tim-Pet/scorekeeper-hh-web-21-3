import React from 'react'
import Button from '../components/lowLevel/Button'
import Game from '../components/Game'

const GamePage = ({ game, updateScore, handleEndGame }) => {
  return (
    <>
      <Game game={game} onMinus={updateScore} onPlus={updateScore} />
      <Button onClick={handleEndGame}>End game</Button>
    </>
  )
}

export default GamePage
