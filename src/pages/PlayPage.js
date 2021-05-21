import React from 'react'
import { Container } from '../components/common/Container'
import GameForm from '../components/GameForm'

const PlayPage = ({ handleGameSubmit }) => {
  return (
    <Container>
      <GameForm onSubmit={handleGameSubmit} />
    </Container>
  )
}

export default PlayPage
