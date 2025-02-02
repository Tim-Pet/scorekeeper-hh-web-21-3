import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

HistoryEntry.propTypes = {
  nameOfGame: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
}
export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <Grid>
      <Title>{nameOfGame}</Title>
      <ul>
        {players.map(({ name, score }) => (
          <Player key={name}>
            <span>{name}</span>
            <span>{score}</span>
          </Player>
        ))}
      </ul>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  gap: 10px;
`

const Title = styled.h2`
  font-size: 1.1em;
  margin: 0.2em 0;
`

const Player = styled.li`
  display: flex;
  justify-content: space-between;
`
