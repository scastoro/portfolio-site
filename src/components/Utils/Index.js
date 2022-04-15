import styled from 'styled-components'
import { devices } from '../Styles/breakpoints'
import ScrollBtn from './ScrollBtn'

export const StyledLink = styled.a`
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
  cursor: pointer;

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
export const StyledScrollBtn = styled(ScrollBtn)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(69, 221, 251);
  opacity: 0.8;

  @media ${devices.mobileL} {
    bottom: 12px;
    right: 12px;
  }
  @media ${devices.desktopL} {
    bottom: 50px;
    right: 70px;
  }
`
