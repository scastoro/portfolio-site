import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

function ScrollBtn({ className }) {
  const scrollToTop = () => {
    if (window !== undefined) {
      window.scrollTo(0, 0)
    }
  }
  return (
    <button className={className} onClick={scrollToTop}>
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
