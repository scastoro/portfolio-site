import { ProjectsContainer, StyledProject } from './ProjectsElements'

import React, { useState } from 'react'
import Project from './Project'

function Projects() {
  return (
    <ProjectsContainer>
      <StyledProject />
      <StyledProject />
    </ProjectsContainer>
  )
}

export default Projects
