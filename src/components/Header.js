import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.h2`
  display: grid;
  font-size: 1.2em;
  font-weight: 500;
  margin: 0;
  padding: 8px;
  place-items: center;
`
