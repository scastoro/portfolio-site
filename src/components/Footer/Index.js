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
          <h4>say hello</h4>
          <a href='mailto:salcastoro@protonmail.com'>
            salcastoro@protonmail.com
          </a>
        </HelloSection>
        <StaticImage
          src='../../images/logo_hi.png'
          quality={95}
          alt='Sal Castoro Logo'
          formats={['auto', 'webp', 'avif']}
          width={72}
          className='logo'
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
