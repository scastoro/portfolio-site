import { ProjectsContainer, StyledProject } from './ProjectsElements'

import React, { useState } from 'react'
import Project from './Project'

function Projects() {
  return (
    <ProjectsContainer>
      <StyledProject
        title='Book Bazaar'
        summary='
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          harum!
        '
        description='
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ut
            distinctio nam quibusdam asperiores. Corrupti, debitis provident
            eum, esse molestiae accusamus eligendi unde voluptas iste sunt quis
            officiis! Facere, porro.
          '
      />
      <StyledProject
        title='Book Bazaar'
        summary='
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          harum!
        '
        description='
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ut
            distinctio nam quibusdam asperiores. Corrupti, debitis provident
            eum, esse molestiae accusamus eligendi unde voluptas iste sunt quis
            officiis! Facere, porro.
          '
      />
      <StyledProject
        title='Book Bazaar'
        summary='
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          harum!
        '
        description='
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ut
            distinctio nam quibusdam asperiores. Corrupti, debitis provident
            eum, esse molestiae accusamus eligendi unde voluptas iste sunt quis
            officiis! Facere, porro.
          '
      />
      <StyledProject
        title='Book Bazaar'
        summary='
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          harum!
        '
        description='
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ut
            distinctio nam quibusdam asperiores. Corrupti, debitis provident
            eum, esse molestiae accusamus eligendi unde voluptas iste sunt quis
            officiis! Facere, porro.
          '
      />
    </ProjectsContainer>
  )
}

export default Projects
