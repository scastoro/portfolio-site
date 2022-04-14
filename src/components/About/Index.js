import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { StyledLink } from '../Utils/Index'
import {
  AboutContainer,
  AboutText,
  AboutIcons,
  AboutLink,
} from './AboutComponents'

function About() {
  return (
    <section className='about-me' id='about'>
      <AboutContainer>
        <StaticImage
          src='../../images/about_me.jpg'
          alt='Sal Castoro'
          quality={100}
          formats={['auto', 'webp', 'avif']}
          width={400}
          objectFit={'cover'}
          objectPosition={'top'}
          style={{ border: '1rem solid #0D0D0D' }}
        />
        <AboutText>
          <h2>About Me</h2>
          <p>
            Hi, my name is Sal and I am a full stack web developer based out of
            North Carolina, USA. I specialize in the MERN stack and I have
            experience with TypeScript, JavaScript, React, Jest, React Testing
            Library, Node, Express, MongoDB, PostgreSQL and REST APIs. I love
            learning and tinkering and I am always willing to try out new
            technologies to build apps and expand my skill set. I am also
            interested in VR, so I am looking into ways to integrate that
            technology into my projects. Follow me on my social media to keep up
            me. I am currently open to new opportunities, so feel free to reach
            out via the contact form below.
          </p>
        </AboutText>
        <AboutIcons id='skills'>
          <h3>Skills</h3>
          <StaticImage
            src='../../images/skills-icons/html_icon.png'
            width={37}
            height={52}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
            alt='html icon'
          />
          <StaticImage
            src='../../images/skills-icons/css_icon.png'
            width={36}
            height={52}
            objectFit={'cover'}
            formats={['auto', 'webp', 'avif']}
            alt='css_icon'
          />
          <StaticImage
            src='../../images/skills-icons/js_icon.png'
            width={50}
            height={50}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
            alt='js icon'
          />
          <StaticImage
            src='../../images/skills-icons/react_icon.png'
            width={56}
            height={50}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
            alt='react icon'
          />
          <StaticImage
            src='../../images/skills-icons/ts_icon.png'
            width={50}
            height={50}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
            alt='typescript icon'
          />
          <StaticImage
            src='../../images/skills-icons/mongo_icon.png'
            width={26}
            height={57}
            objectFit={'cover'}
            formats={['auto', 'webp', 'avif']}
            alt='MongoDB Icon'
          />
          <StaticImage
            src='../../images/skills-icons/node_icon.png'
            width={50}
            height={56}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
            alt='Node.js Icon'
          />
          <StaticImage
            src='../../images/skills-icons/sql_icon.png'
            width={48}
            height={50}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
          />
        </AboutIcons>
        <AboutLink>
          <StyledLink
            target='_blank'
            rel='noopener noreferrer'
            href='https://1drv.ms/b/s!AvnRMsO1Aae5hYFhaqk6Ro_ERE5jqg?e=T4xVGk'
          >
            View Resume
          </StyledLink>
        </AboutLink>
      </AboutContainer>
    </section>
  )
}

export default About
