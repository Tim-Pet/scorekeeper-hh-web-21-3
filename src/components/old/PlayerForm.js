import PropTypes from 'prop-types'
import styled from 'styled-components'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function PlayerForm() {
  return (
    <StyledLabel>
      Add player:
      <StyledInput name="name" type="text" placeholder="Player name" />
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: grid;
  gap: 4px;
`
const StyledInput = styled.input`
  padding: 4px;
`
