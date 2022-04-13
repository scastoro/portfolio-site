import styled from 'styled-components'
import { devices } from '../Styles/breakpoints'

export const StyledFooter = styled.footer`
  background: #0d0d0d;
  color: #f8f8f8;
  padding: 7rem 0 2rem;

  .copyright {
    text-align: center;
    margin-top: 6rem;
    color: #c4c4c4;
    font: italic 400 1.2rem 'Poppins', sans-serif;
  }

  @media ${devices.mobileL} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-left: 8%;

    .copyright {
      margin-top: 3rem;
      width: 50%;
      text-align: left;
    }
  }
`

export const FooterContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  @media ${devices.tabletL} {
    margin-left: 7%;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    width: 50%;

    .logo {
      display: none;
    }
  }
`

export const HelloSection = styled.section`
  font-family: 'Poppins', sans-serif;
  padding-left: 0.5rem;
  position: relative;
  padding-left: 1rem;

  &::before {
    top: 3px;
    position: absolute;
    content: '';
    width: 1px;
    border-left: 1px solid #45ddf8;
    height: 80%;
  }
  h4 {
    color: #45ddf8;
    font: 500 1.75rem 'Poppins', sans-serif;
    margin: 0 1rem 0;
    line-height: 1.75rem;
  }
  a {
    margin: 0.75rem 1rem 0;
    font: 400 1.35rem 'Poppins', sans-serif;
  }
  @media ${devices.mobileL} {
    margin-bottom: 3rem;
    padding: 0;

    a {
      font-size: 1.1rem;
    }
  }
`

export const SocialMediaSection = styled.section`
  margin-left: 90px;
  position: relative;

  &::before {
    top: 3px;
    position: absolute;
    content: '';
    width: 1px;
    border-left: 1px solid #45ddf8;
    height: 80%;
  }

  h4 {
    color: #45ddf8;
    font: 500 1.75rem 'Poppins', sans-serif;
    margin: 0 1rem 0;
    line-height: 1.75rem;
  }
  a {
    display: inline-block;
    margin: 0.75rem 1rem 0;
    font: 400 1.35rem 'Poppins', sans-serif;

    &:hover {
      opacity: 0.75;
    }
  }
  @media ${devices.tabletL} {
    margin-left: 27px;
  }
  @media ${devices.mobileL} {
    margin: 0;
  }
`
