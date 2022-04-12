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
  @media ${devices.mobileL} {
    padding: 1.75rem 3rem;

    h2 {
      font-size: 2.75rem;
      margin-bottom: 0.7rem;
    }
    p {
      font-size: 1.4rem;
      margin-bottom: 0.7rem;
    }
  }
`

export const AboutIcons = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  background: #0d0d0d;
  font: 500 1rem 'Poppins', sans-serif;
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
