import styled from "styled-components"
import { Link } from "gatsby"

export const Nav = styled.nav`
  padding: 2rem 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0d0d0d;
  color: #f8f8f8;
`
export const NavLogo = styled.img`
  margin-left: 7rem;
`

export const NavUl = styled.ul`
  font: 500 1.9rem "Poppins", sans-serif;
  margin: 0;
  display: flex;
  align-items: center;
  list-style: none;

  li {
    margin-right: 5rem;
    font-size: 1.9rem;
  }
`

export const NavButton = styled(Link)`
  width: 14rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  border-radius: 2px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  color: #151517;
`
