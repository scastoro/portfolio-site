import styled from 'styled-components'
import { devices } from '../Styles/breakpoints'

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
