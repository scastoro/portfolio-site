import { HoverText, ProjectText, ProjectImageSection } from './ProjectsElements'

import React, { useRef, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

function Project({ className, title, summary, description }) {
  const hoverRef = useRef()
  const handleMouseEnter = () => {
    hoverRef.current.style.display = 'block'
  }
  const handleMouseLeave = () => {
    hoverRef.current.style.display = 'none'
  }
  return (
    <section className={className}>
      <ProjectImageSection
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <section>
          <StaticImage src='../../images/books.jpg' alt='' />
        </section>

        <HoverText ref={hoverRef}>
          <h3>{title}</h3>
          <p>{description}</p>
        </HoverText>
      </ProjectImageSection>
      <ProjectText>
        <h2>Book Bazaar</h2>
        <p>{summary}</p>
        <section className='links'>
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
        </section>
      </ProjectText>
    </section>
  )
}

Project.propTypes = {
  userName: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  description: PropTypes.string,
}

export default Project
