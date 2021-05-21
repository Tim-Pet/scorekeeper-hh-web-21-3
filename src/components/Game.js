import React from 'react'
import Player from './Player'

const Game = ({ game, onMinus, onPlus }) => {
  return (
    <>
      <h3>{game.gameName}</h3>
      {game.players.map((player, index) => (
        <Player
          key={player.name}
          name={player.name}
          score={player.score}
          onMinus={() => onMinus(index, -1)}
          onPlus={() => onPlus(index, +1)}
        />
      ))}
    </>
  )
}

export default Game
