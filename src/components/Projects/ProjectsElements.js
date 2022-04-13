import styled from 'styled-components'
import Project from './Project'
import { devices } from '../Styles/breakpoints'

export const ProjectsContainer = styled.section`
  display: grid;
  margin: 0 2rem;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 1fr 1fr;
  justify-items: center;
  align-items: center;

  h2 {
    grid-column: 1 / -1;
    color: #f8f8f8;
    font: 700 4.5rem 'Source Code Pro', sans-serif;
    margin-bottom: 0;
  }

  @media ${devices.mobileL} {
    grid-template-columns: 1fr;
    grid-template-rows: 100px repeat(4, 1fr);
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
export const StyledProject = styled(Project)`
  display: flex;
  flex-direction: column;
  background-color: #0d0d0d;

  h3 {
    font: 700 3rem 'Source Code Pro', sans-serif;
  }
  p {
    font: 400 1.5rem 'Poppins', sans-serif;
  }
`
export const ProjectImageSection = styled.section`
  position: relative;
  border: 10px solid #0d0d0d;
  border-radius: 6px 6px 0 0;
`

export const HoverText = styled.section`
  background: rgba(0, 0, 0, 0.9);
  color: #f8f8f8;
  padding: 0 7rem;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  h3 {
    font: 700 3rem 'Oswald', sans-serif;
    margin: 5rem 0 0.5rem 0;
    text-align: center;
  }
  p {
    font: 400 1.35rem 'Poppins', sans-serif;
    color: #e3e3e3;
  }

  @media ${devices.tabletL} {
    padding: 1.5rem;

    h3 {
      margin: 0 0 1rem 0;
      font-size: 2.75rem;
      line-height: 100%;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media ${devices.mobileL} {
    padding: 1rem;
  }
`

export const ProjectText = styled.section`
  color: #f8f8f8;
  padding: 2rem 4rem 0;

  a {
    background-color: #45ddfb;
    border-radius: 25px;
    font: 600 1.4rem 'Open Sans', sans-serif;
    color: #151517;
    padding: 0.75rem 2.2rem;

    .gatsby-image-wrapper {
      margin-right: 0.25rem;
    }

    &:hover {
      opacity: 0.75;
    }
  }
  .links {
    margin: 3rem 0 4rem 0;
    display: flex;
    justify-content: space-around;
  }
  @media ${devices.tablet} {
    padding: 1rem 3rem 0;

    .links {
      margin: 2rem 0 3rem 0;
      justify-content: space-between;

      a {
        font-size: 1.25rem;
        padding: 0.75rem 1.5rem;
      }
    }
    h3 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1.45rem;
    }
  }
`
