import { HoverText, ProjectText, ProjectImageSection } from './ProjectsElements'

import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Project({ className }) {
  const [isShown, setIsShown] = useState('none')
  const handleMouseEnter = () => {
    setIsShown('block')
  }
  const handleMouseLeave = () => {
    setIsShown('none')
  }
  return (
    <section className={className}>
      <ProjectImageSection
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <section>
          <StaticImage src='../../images/books.jpg' alt='' />
        </section>

        <HoverText
          style={{
            display: isShown,
          }}
        >
          <h3>Book Bazaar</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ut
            distinctio nam quibusdam asperiores. Corrupti, debitis provident
            eum, esse molestiae accusamus eligendi unde voluptas iste sunt quis
            officiis! Facere, porro.
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
            alt=''
          />
          View Project
        </a>
        <a href='#'>
          <StaticImage
            src='../../images/code_icon.png'
            width={20}
            quality={100}
            alt=''
          />
          View Code
        </a>
      </ProjectText>
    </section>
  )
}

export default Project
