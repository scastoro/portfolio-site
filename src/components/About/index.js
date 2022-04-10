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
    <section className='about-me'>
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
        <AboutIcons>
          <StaticImage
            src='../../images/html_icon.png'
            width={49}
            height={72}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            src='../../images/css_icon.png'
            width={40}
            height={72}
            objectFit={'cover'}
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            src='../../images/javascript_icon.png'
            width={81}
            height={76}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            src='../../images/sql_icon.png'
            width={34}
            height={73}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            src='../../images/html_icon.png'
            width={49}
            height={72}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            src='../../images/css_icon.png'
            width={40}
            height={72}
            objectFit={'cover'}
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            src='../../images/javascript_icon.png'
            width={81}
            height={76}
            objectFit={'contain'}
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            src='../../images/sql_icon.png'
            width={34}
            height={73}
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
