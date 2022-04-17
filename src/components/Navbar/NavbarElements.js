import styled from 'styled-components'
import { Link } from 'gatsby'
import { devices } from '../Styles/breakpoints'

export const Nav = styled.nav`
  padding: 2rem 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0d0d0d;
  color: #f8f8f8;

  .logo {
    margin-right: 75px;
  }
  .mobile-container {
    display: flex;
    align-items: center;
  }
  .menu-icon {
    display: none;
  }

  @media ${devices.mobileL} {
    padding: 1rem;
    flex-direction: column;
    justify-content: space-around;

    .mobile-container {
      width: 100%;
      padding: 0 2rem;
    }
    .logo {
      margin-right: 4rem;
    }
    .menu-icon {
      display: block;
      width: 80px;
      margin-left: auto;
    }
  }
  @media ${devices.tabletL} {
    padding: 2rem 4rem;
  }
  @media ${devices.tablet} {
    .logo {
      margin-right: 60px;
    }
  }

  @media ${devices.laptopL} {
    width: 80%;
    margin: 0 auto;
  }

  @media ${devices.desktop} {
    width: 65%;
  }
`
export const NavLogo = styled.img`
  margin-left: 7rem;

  @media ${devices.mobileL} {
    margin-left: 0;
  }
`

export const NavUl = styled.ul`
  font: 500 1.9rem 'Poppins', sans-serif;
  margin: 0;
  display: flex;
  align-items: center;
  list-style: none;
  z-index: 1;

  li {
    margin: 0rem 5rem;
    font-size: 1.9rem;
    transition: opacity 0.15s ease-in;

    &:hover {
      opacity: 0.75;
    }
  }
  @media ${devices.laptop} {
    li {
      margin: 0 3rem;
    }
  }
  @media ${devices.tabletL} {
    li {
      margin: 0 2rem;
    }
  }
  @media ${devices.mobileL} {
    flex-direction: column;
    display: none;
    text-align: center;
    /* margin-top: -4rem; */

    li {
      margin: 1rem 0;
      font-size: 2.2rem;
    }
  }
`

export const StyledButton = styled(Link)`
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
  z-index: 1;
  transition: opacity 0.15s ease-in;

  &:hover {
    opacity: 0.75;
  }
  @media ${devices.mobileL} {
    display: none;
  }
  @media ${devices.tablet} {
    width: 120px;
    font-size: 16px;
  }
`
