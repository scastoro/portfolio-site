import {
  ContactSection,
  FormContainer,
  ContactForm,
  ContactButton,
} from './ContactComponents'
import React from 'react'
import ContactIcon from '../../assets/contact_icon.svg'

function Contact() {
  return (
    <ContactSection>
      <h2>Let's Chat</h2>
      <FormContainer>
        <ContactIcon />
        <ContactForm method='POST'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name*'
            required
          />
          <fieldset>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email*'
              required
            />
            <input type='phone' name='phone' id='phone' placeholder='Phone' />
          </fieldset>
          <textarea
            name='Message'
            id='message'
            cols='30'
            rows='1'
            placeholder='Message*'
            required
          />
          <ContactButton>Send</ContactButton>
        </ContactForm>
      </FormContainer>
    </ContactSection>
  )
}

export default Contact
