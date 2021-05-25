import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default function Button({ component = 'button', ...props }) {
  return <ButtonStyled as={component} {...props} />
}

const ButtonStyled = styled.button`
  background: ${p => (p.isActive ? 'steelblue' : '#ddd')};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  padding: 12px;
`
