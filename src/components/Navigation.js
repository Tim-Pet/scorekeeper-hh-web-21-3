import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

Navigation.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
  ),
  currentPageId: PropTypes.string,
}
export default function Navigation({ onNavigate, pages, currentPageId }) {
  return (
    <Nav>
      {pages.map(({ title, id }) => (
        <NavButton
          to={`/${id}`}
          key={id}
          isActive={currentPageId === id}
          onClick={() => onNavigate(id)}
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

const NavButton = styled(Link)`
  background: ${p => (p.isActive ? 'steelblue' : '#ddd')};
  border-radius: 0;
  border: none;
  color: #333;
  cursor: pointer;
  height: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`
