import { ProjectsContainer, StyledProject } from './ProjectsElements'

import React from 'react'

function Projects() {
  return (
    <ProjectsContainer id='projects'>
      <h2>Projects</h2>
      <StyledProject
        title='Blog API and Admin Panel'
        summary='
          REST API that serves blog posts and Front-End site that consumes the API endpoints.
        '
        description='
          Rest API Built with Express and MongoDB. Allows for CRUD actions via HTTP Requests. 
          Users are authenticated using PassportJS and express-jwt. Routes are protected with JWT authentication. Admin panel made with React using TypeScript, Context API, and Styled Components. Admin panel allows Author to create, update, view, and delete blog posts and comments on posts. 
          '
        imageUrl='projects-1.jpg'
      />
      <StyledProject
        title='Electronics Emporium'
        summary='
          An inventory management system for computer parts. Users can create, view,
          update, and delete products. 
        '
        description='
          A full stack application made with Node.js, Express, MongoDB, and Pug. Features
          a form where users can enter new products. Users can see current products and update
          product information. Products can also be viewed by category. All fields are validated server side using Express validator middleware. App uses the MVC pattern to generate views via controllers which access a MongoDB database. 
          '
        imageUrl='projects-2.jpg'
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
      />
      <StyledProject
        title='Book Bazaar'
        summary='
          A landing page and shop for a book store. Users can navigate 
          from the landing page to the shop, add items to a cart and view the cart.
        '
        description='
          This application was built using React as the framework and React router to move
          from page to page. The app was tested using Jest and React Testing Library. The 
          design was created in figma and implemented using vanilla CSS. The  cart animation 
          was implemented by using the React-Transitions-Group addon.
          '
        imageUrl='projects-4.jpg'
      />
    </ProjectsContainer>
  )
}

export default Projects
