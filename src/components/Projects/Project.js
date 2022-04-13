import { HoverText, ProjectText, ProjectImageSection } from './ProjectsElements'

import React, { useState } from 'react'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

function Project({
  className,
  title,
  summary,
  description,
  id,
  projectUrl,
  codeUrl,
}) {
  const [isShown, setIsShown] = useState(false)
  const showHover = () => {
    if (!isShown) {
      setIsShown(true)
    }
  }
  const hideHover = () => {
    if (isShown) {
      setIsShown(false)
    }
  }
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          name: { regex: "/projects/" }
          childImageSharp: { fluid: {} }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(height: 321, width: 574)
            }
          }
        }
      }
    }
  `)
  console.log(data.allFile.edges.find(item => item.node.base === projectUrl))
  console.log(data.allFile.edges)
  return (
    <section id='projects' className={className}>
      <ProjectImageSection
        onMouseOverCapture={showHover}
        onMouseLeave={hideHover}
      >
        <section>
          <GatsbyImage
            image={
              data.allFile.edges.find(item => item.node.base === projectUrl)
                ?.node?.childImageSharp?.gatsbyImageData || ''
            }
            objectFit='cover'
            alt=''
          />
        </section>

        {isShown && (
          <HoverText>
            <h3>{title}</h3>
            <p>{description}</p>
          </HoverText>
        )}
      </ProjectImageSection>
      <ProjectText>
        <h3>{title}</h3>
        <p>{summary}</p>
        <section className='links'>
          <a href={projectUrl || '#'}>
            <StaticImage
              src='../../images/project_icon.png'
              width={20}
              quality={100}
              alt=''
            />
            View Project
          </a>
          <a href={codeUrl || '#'}>
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
