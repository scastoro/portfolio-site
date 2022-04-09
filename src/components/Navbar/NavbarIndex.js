import { Nav, NavLogo, NavUl, NavButton } from "./NavbarElements"
import { StaticImage } from "gatsby-plugin-image"

import React from "react"

function NavbarIndex() {
  return (
    <Nav>
      <StaticImage
        src='../../images/logo.svg'
        width={65}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt='A Gatsby astronaut'
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
      <NavButton />
    </Nav>
  )
}

export default NavbarIndex
