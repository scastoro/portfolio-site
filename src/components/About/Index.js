import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { StyledButton } from '../Navbar/NavbarElements'
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dicta
            eos vitae voluptate tempore totam. Vitae recusandae natus delectus
            aperiam inventore praesentium commodi expedita itaque, omnis
            repellendus! Inventore, placeat enim.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nemo
            dolor exercitationem! Earum, minima magnam eius obcaecati laudantium
            unde labore.
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
          />
          <StaticImage
            src='../../images/skills-icons/css_icon.png'
            width={36}
            height={52}
            objectFit={'cover'}
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            src='../../images/skills-icons/js_icon.png'
            width={50}
            height={50}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            src='../../images/skills-icons/react_icon.png'
            width={56}
            height={50}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            src='../../images/skills-icons/ts_icon.png'
            width={50}
            height={50}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            src='../../images/skills-icons/mongo_icon.png'
            width={26}
            height={57}
            objectFit={'cover'}
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            src='../../images/skills-icons/node_icon.png'
            width={50}
            height={56}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
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
          <StyledButton to='#'>View Resume</StyledButton>
        </AboutLink>
      </AboutContainer>
    </section>
  )
}

export default About
