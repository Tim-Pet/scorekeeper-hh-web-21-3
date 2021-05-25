import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from './common/Button'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
  ),
  currentPageId: PropTypes.string,
}
export default function Navigation({ pages }) {
  return (
    <Nav>
      {pages.map(({ title, id, disabled }) => (
        <NavButton
          exact
          component={NavLink}
          to={id}
          key={id}
          disabled={disabled}
        >
          {title}
        </NavButton>
      ))}
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;

  display: flex;
  height: 60px;
`

const NavButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 0;
  width: 100%;
  text-decoration: none;
`
