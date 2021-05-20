import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const GameForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <StyledLabel htmlFor="gameName">Name of the game:</StyledLabel>
      <StyledInput
        name="gameName"
        id="gameName"
        type="text"
        placeholder="game name"
      />
      <StyledLabel htmlFor="playerNames">Add player:</StyledLabel>
      <StyledInput
        name="playerNames"
        id="playerNames"
        type="text"
        placeholder="player name"
      />
      <Button>Create Game</Button>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const gameInput = form.elements.gameName
    const playersInput = form.elements.playerNames
    onSubmit(gameInput.value, playersInput.value)
    form.reset()
  }
}

export default GameForm

const Form = styled.form`
  display: grid;
`
const StyledLabel = styled.label`
  margin-bottom: 5px;
`
const StyledInput = styled.input`
  margin-bottom: 30px;
  border-radius: 8px;
  border: 1px solid #333;
  padding: 8px;
`
