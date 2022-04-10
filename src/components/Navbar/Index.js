import { Nav, NavUl, StyledButton } from './NavbarElements'
import { StaticImage } from 'gatsby-plugin-image'

import React from 'react'

function Navbar() {
  return (
    <Nav>
      <StaticImage
        src='../../images/logo_hi.png'
        width={65}
        quality={100}
        formats={['svg', 'auto', 'webp', 'avif']}
        alt='Sal Castoro Logo'
        style={{ marginRight: '75px' }}
      />
      <NavUl>
        <li>
          <a href='#'>projects</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
        <li>
          <a href='#'>skills</a>
        </li>
        <li>
          <a href='#'>resume</a>
        </li>
      </NavUl>
      <StyledButton to='#'>Let's Chat </StyledButton>
    </Nav>
  )
}

export default Navbar
