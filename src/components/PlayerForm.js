import './PlayerForm.css'
import PropTypes from 'prop-types'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function PlayerForm() {
  return (
    <label>
      Add player:
      <input name="name" type="text" placeholder="Player name" />
    </label>
  )
}
