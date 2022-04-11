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
          <div className='input-container'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name*'
              required
              autoComplete='off'
            />
            <div className='line'></div>
          </div>
          <fieldset>
            <div className='input-container'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email*'
                required
                autoComplete='off'
              />
              <div className='line'></div>
            </div>
            <div className='input-container'>
              <input
                type='phone'
                name='phone'
                id='phone'
                placeholder='Phone'
                autoComplete='off'
              />
              <div className='line'></div>
            </div>
          </fieldset>
          <div className='input-container'>
            <textarea
              name='Message'
              id='message'
              cols='30'
              rows='1'
              placeholder='Message*'
              required
            />
            <div className='line'></div>
          </div>
          <ContactButton>Send</ContactButton>
        </ContactForm>
      </FormContainer>
    </ContactSection>
  )
}

export default Contact
