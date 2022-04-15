import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

function ScrollBtn({ className }) {
  return (
    <a className={className} href='#nav'>
      <StaticImage
        src='../../images/arrow_up.png'
        alt=''
        quality={95}
        className={'up-image'}
        loading='eager'
        placeholder='blurred'
      />
    </a>
  )
}

export default ScrollBtn
