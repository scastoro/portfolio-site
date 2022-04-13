import Navbar from '../Navbar/Index'
import { StyledHeader } from './HeaderElements'
import HeaderBackground from '../../assets/header_background.svg'

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Header() {
  return (
    <StyledHeader>
      <Navbar />
      {/* <HeaderBackground /> */}
      <StaticImage
        src='../../images/background_image.png'
        formats={['auto', 'webp', 'avif']}
        className='background-image'
        alt='background image'
      />
    </StyledHeader>
  )
}

export default Header
