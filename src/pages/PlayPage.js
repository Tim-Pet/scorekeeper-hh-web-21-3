import React from 'react'
import { Container } from '../components/common/Container'
import GameForm from '../components/GameForm'
import Header from '../components/Header'

const PlayPage = ({ handleGameSubmit }) => {
  return (
    <Container>
      <Header>Create game</Header>
      <GameForm onSubmit={handleGameSubmit} />
    </Container>
  )
}

export default PlayPage
