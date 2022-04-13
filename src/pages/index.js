import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/Main/Index'
import Projects from '../components/Projects/Index'
import About from '../components/About/Index'
import Contact from '../components/Contact/Index'

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <Hero />
    <Projects />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
