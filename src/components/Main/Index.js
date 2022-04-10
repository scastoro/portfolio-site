import React from "react"
import { HeroContainer, HeroContent, HeroText } from "./HeroElements"
import { StaticImage } from "gatsby-plugin-image"

function Hero() {
  return (
    <main>
      <HeroContainer>
        <HeroContent>
          <StaticImage
            src='../../images/hero_logo.png'
            width={164}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt='Hero Logo'
          />
          <HeroText>
            <h1>Sal Castoro</h1>
            <h2>Full Stack Web Developer</h2>
            <section className='socials'>
              <a
                href='https://www.linkedin.com/in/sal-castoro-3b1050178/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <StaticImage
                  src='../../images/linkedin_icon.png'
                  width={20}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt='Hero Logo'
                />
              </a>
              <a
                href='https://github.com/scastoro'
                target='_blank'
                rel='noopener noreferrer'
              >
                <StaticImage
                  src='../../images/github_icon.png'
                  width={20}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt='Hero Logo'
                />
              </a>
            </section>
          </HeroText>
        </HeroContent>
      </HeroContainer>
    </main>
  )
}

export default Hero
