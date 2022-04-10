import {
  ProjectsContainer,
  Project,
  HoverText,
  ProjectText,
  ProjectImageSection,
} from './ProjectsElements'

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

function Projects() {
  return (
    <ProjectsContainer>
      <Project>
        <ProjectImageSection>
          <StaticImage src='../../images/books.jpg' />
          <HoverText>
            <h3>Book Bazaar</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              ut distinctio nam quibusdam asperiores. Corrupti, debitis
              provident eum, esse molestiae accusamus eligendi unde voluptas
              iste sunt quis officiis! Facere, porro.
            </p>
          </HoverText>
        </ProjectImageSection>
        <ProjectText>
          <h2>Book Bazaar</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            harum!
          </p>
          <a href='#'>
            <StaticImage
              src='../../images/project_icon.png'
              width={20}
              quality={100}
            />
            View Project
          </a>
          <a href='#'>
            <StaticImage
              src='../../images/code_icon.png'
              width={20}
              quality={100}
            />
            View Code
          </a>
        </ProjectText>
      </Project>
      <Project>
        <ProjectImageSection>
          <StaticImage src='../../images/books.jpg' />
          <HoverText>
            <h3>Book Bazaar</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              ut distinctio nam quibusdam asperiores. Corrupti, debitis
              provident eum, esse molestiae accusamus eligendi unde voluptas
              iste sunt quis officiis! Facere, porro.
            </p>
          </HoverText>
        </ProjectImageSection>
        <ProjectText>
          <h2>Book Bazaar</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            harum!
          </p>
        </ProjectText>
      </Project>
    </ProjectsContainer>
  )
}

export default Projects
