import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

function ScrollBtn({ className }) {
  return (
    <button className={className} onClick={() => scrollTo('#nav')}>
      <StaticImage
        src='../../images/arrow_up.png'
        alt=''
        quality={95}
        className={'up-image'}
        loading='eager'
        placeholder='blurred'
      />
    </button>
  )
}

export default ScrollBtn
