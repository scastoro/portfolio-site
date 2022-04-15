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
    <Nav id='nav'>
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
          <a href='#projects'>projects</a>
        </li>
        <li>
          <a href='#about'>about</a>
        </li>
        <li>
          <a href='#skills'>skills</a>
        </li>
        <li>
          <a
            href='https://1drv.ms/b/s!AvnRMsO1Aae5hYFhaqk6Ro_ERE5jqg?e=T4xVGk'
            target='_blank'
            rel='noopener noreferrer'
          >
            resume
          </a>
        </li>
        {displayNav === 'block' ? (
          <li>
            {' '}
            <StyledButton style={{ display: 'flex' }} to='#contact'>
              Let's Chat
            </StyledButton>
          </li>
        ) : null}
      </NavUl>
      <StyledButton to='#contact'>Let's Chat </StyledButton>
    </Nav>
  )
}

export default Navbar
