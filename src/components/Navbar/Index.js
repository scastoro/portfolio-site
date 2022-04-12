import { Nav, NavUl, StyledButton } from './NavbarElements'
import { StaticImage } from 'gatsby-plugin-image'
import Menu from '../../assets/menu_icon.svg'

import React, { useState } from 'react'

function Navbar() {
  const [displayNav, setDisplayNav] = useState('')
  const toggleNav = () => {
    if (displayNav === '' || displayNav === 'none') {
      setDisplayNav('block')
    } else {
      setDisplayNav('none')
    }
  }
  return (
    <Nav>
      <section className='mobile-container'>
        <StaticImage
          src='../../images/logo_hi.png'
          width={65}
          quality={100}
          formats={['auto', 'webp', 'avif']}
          alt='Sal Castoro Logo'
          className='logo'
        />
        <Menu className='menu-icon' onClick={toggleNav} />
      </section>
      <NavUl style={{ display: displayNav || '' }}>
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
        {displayNav === 'block' ? (
          <li>
            {' '}
            <StyledButton style={{ display: 'flex' }} to='#'>
              Let's Chat
            </StyledButton>
          </li>
        ) : null}
      </NavUl>
      <StyledButton to='#'>Let's Chat </StyledButton>
    </Nav>
  )
}

export default Navbar
