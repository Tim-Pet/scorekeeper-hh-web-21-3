import React from 'react'
import GameForm from '../components/GameForm'

const PlayPage = ({ handleGameSubmit }) => {
  return (
    <>
      <GameForm onSubmit={handleGameSubmit} />
    </>
  )
}

export default PlayPage
