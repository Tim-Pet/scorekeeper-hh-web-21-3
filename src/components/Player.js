import styled from 'styled-components'
import PropTypes from 'prop-types'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}
export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <PlayerContainer>
      {name}{' '}
      <ButtonContainer>
        <button onClick={onMinus}>-</button>
        <PlayerScore>{score}</PlayerScore>
        <button onClick={onPlus}>+</button>
      </ButtonContainer>
    </PlayerContainer>
  )
}

const PlayerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
const PlayerScore = styled.output`
  width: 3ch;
  text-align: right;
`
