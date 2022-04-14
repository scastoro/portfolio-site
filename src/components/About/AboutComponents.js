import styled from 'styled-components'
import { devices } from '../Styles/breakpoints'

export const AboutContainer = styled.section`
  display: grid;
  margin: 10rem 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  gap: 2rem;

  @media ${devices.mobileL} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 300px);
    margin: 10rem 0;
  }

  @media ${devices.laptopL} {
    width: 80%;
    margin: 0 auto 10rem;
  }

  @media ${devices.desktop} {
    width: 65%;
  }

  @media ${devices.desktopL} {
    width: 50%;
  }
`
export const AboutText = styled.section`
  color: #f8f8f8;
  background: #0d0d0d;
  border-radius: 6px;
  padding: 4rem 5rem;

  h2 {
    font: 700 3rem 'Source Code Pro', sans-serif;
  }
  p {
    font: 400 1.7rem 'Poppins', sans-serif;
  }
  @media ${devices.tabletL} {
    padding: 2rem 2.5rem;
  }

  @media ${devices.mobileL} {
    padding: 1.5rem 2rem;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1.3rem;
      margin-bottom: 0;
    }
  }
  @media ${devices.mobileM} {
    padding: 1rem 2rem;

    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`

export const AboutIcons = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px 1fr 1fr;
  justify-items: center;
  align-items: center;
  background: #0d0d0d;
  font: 500 1rem 'Poppins', sans-serif;

  h3 {
    grid-column: 1 / -1;
    color: #f8f8f8;
    font: 700 2.5rem 'Source Code Pro', sans-serif;
    margin: 1.5rem 0 0 0;
  }

  @media ${devices.mobileL} {
    h3 {
      justify-self: start;
      margin: 1.5rem 0 0 2.75rem;
    }
  }
`

export const AboutLink = styled.section`
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: block;
  }
`
