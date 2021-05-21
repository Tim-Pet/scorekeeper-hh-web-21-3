import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: space-between;
`
const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`
const PlayerScore = styled.output`
  text-align: right;
  width: 3ch;
`
