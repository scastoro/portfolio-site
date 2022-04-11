import {
  StyledFooter,
  FooterContainer,
  HelloSection,
  SocialMediaSection,
} from './FooterElements'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <HelloSection>
          <h4>Say Hello</h4>
          <p>salcastoro@protonmail.com</p>
        </HelloSection>
        <StaticImage
          src='../../images/logo_hi.png'
          quality={95}
          alt='Sal Castoro Logo'
          formats={['auto', 'webp', 'avif']}
          width={72}
        />
        <SocialMediaSection>
          <h4>social media</h4>
          <a href='https://github.com/scastoro'>github</a>
          <a href='https://www.linkedin.com/in/sal-castoro-3b1050178/'>
            linkedIn
          </a>
        </SocialMediaSection>
      </FooterContainer>
      <p className='copyright'>&copy; Sal Castoro {new Date().getFullYear()}</p>
    </StyledFooter>
  )
}

export default Footer
