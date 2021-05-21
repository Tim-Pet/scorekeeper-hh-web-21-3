import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from './common/Button'

const GameForm = ({ onSubmit }) => {
  let history = useHistory()

  return (
    <Form onSubmit={handleSubmit}>
      <LabelStyled htmlFor="gameName">Name of the game:</LabelStyled>
      <InputStyled
        name="gameName"
        id="gameName"
        type="text"
        placeholder="game name"
      />
      <LabelStyled htmlFor="playerNames">Add player:</LabelStyled>
      <InputStyled
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
    history.push(`/game`)
  }
}

export default GameForm

const Form = styled.form`
  display: grid;
`
const LabelStyled = styled.label`
  margin-bottom: 5px;
`
const InputStyled = styled.input`
  border-radius: 8px;
  border: 1px solid #333;
  margin-bottom: 30px;
  padding: 8px;
`
