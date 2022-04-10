import styled from 'styled-components'
import Project from './Project'

export const ProjectsContainer = styled.section`
  display: grid;
  margin: 0 2rem;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`
export const StyledProject = styled(Project)`
  display: flex;
  flex-direction: column;
  background-color: #0d0d0d;
`
export const ProjectImageSection = styled.section`
  position: relative;
  border: 10px solid #0d0d0d;
  border-radius: 6px 6px 0 0;
`

export const HoverText = styled.section`
  display: none;
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
`

export const ProjectText = styled.section`
  color: #f8f8f8;
`
