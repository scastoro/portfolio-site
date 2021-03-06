import { ProjectsContainer, StyledProject } from './ProjectsElements'

import React from 'react'

function Projects() {
  return (
    <ProjectsContainer id='projects'>
      <h2>Projects</h2>
      <StyledProject
        title='Blog API'
        summary='
          REST API that serves blog posts and Front-End site that consumes the API endpoints.
          Posts can be created, updated, modified, and deleted.
        '
        description='
          Rest API Built with Express and MongoDB. Allows for CRUD actions via HTTP Requests. 
          Users are authenticated using PassportJS and express-jwt. Routes are protected with JWT authentication. Admin panel made with React using TypeScript, Context API, and Styled Components. Admin panel allows Author to interact with posts. 
          '
        imageUrl='projects-1.jpg'
        codeUrl='https://github.com/scastoro/blog-admin'
        imgDescription='code'
      />
      <StyledProject
        title='Electronics Emporium'
        summary='
          An inventory management system for computer parts. Users can create, view,
          update, and delete products. 
        '
        description='
          A full stack application made with Node.js, Express, MongoDB, and Pug.  Users can see current products, update
          product information, and add new products. Products can also be viewed by category. All fields are validated server side using Express validator middleware. App uses the MVC pattern to generate views.
          '
        imageUrl='projects-2.jpg'
        codeUrl='https://github.com/scastoro/inventory-app'
        imgDescription='motherboard'
      />
      <StyledProject
        title='Members Only'
        summary='
          Message board where all visitors to the site can view messages. Users can register
          as members to be able to post. Admins can remove posts.
        '
        description='
          Full stack application made with Node.js, Express, MongoDB, and EJS. User
          information is stored in a MongoDB collection with hashed and salted passwords. Posts
          are stored in another collection and the two collections are related to one 
          another. The database requests are handled with the Mongoose ORM.   
          '
        imageUrl='projects-3.jpg'
        codeUrl='https://github.com/scastoro/members-only'
        imgDescription='door'
      />
      <StyledProject
        title='Book Bazaar'
        summary='
          A landing page and shop for a book store. Users can navigate 
          from the landing page to the shop, add items to a cart and view the cart.
        '
        description='
          Website built with React and React router. The app was tested using Jest and React Testing Library. The design was created in figma and implemented using vanilla CSS. The cart animation was implemented by using the React-Transitions-Group library.
          '
        imageUrl='projects-4.jpg'
        codeUrl='https://github.com/scastoro/book-bazaar'
        imgDescription='bookshelf'
      />
    </ProjectsContainer>
  )
}

export default Projects
