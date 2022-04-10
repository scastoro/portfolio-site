import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  display: grid;
  margin: 0 2rem;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`
export const Project = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #0d0d0d;
`
export const ProjectImageSection = styled.section`
  position: relative;
`

export const HoverText = styled.section`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`

export const ProjectText = styled.section`
  color: #f8f8f8;
`
