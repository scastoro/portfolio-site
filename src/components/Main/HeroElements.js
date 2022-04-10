import styled from 'styled-components'

export const HeroContainer = styled.section`
  padding: 20rem 0;
  color: #f8f8f8;
  background-color: #151517;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HeroContent = styled.section`
  display: flex;
  gap: 2rem;
`
export const HeroText = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    margin-bottom: 0;
    font: 200 6.4rem 'Oswald', sans-serif;
  }

  h2 {
    margin: -0.75rem 0 0 0;
    font: 500 2.2rem 'Source Code Pro', sans-serif;
    color: #45ddf8;
  }

  a {
    display: inline-block;
    margin: 0.5rem 2rem 0 0;
  }
`
