import styled from 'styled-components'

export const ContactSection = styled.section`
  background: #0d0d0d;
  color: #f8f8f8;
  margin: 0 2rem 10rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font: 700 3rem 'Source Code Pro', sans-serif;
    margin: 5rem 0 4rem;
  }
`

export const FormContainer = styled.section`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  svg {
    align-self: flex-start;
    margin-top: 0.5rem;
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    background: #0d0d0d;
    border: none;
    border-bottom: #f8f8f8 solid 1px;
    margin-bottom: 1.5rem;
    color: white;

    &::placeholder {
      color: #f8f8f8;
      opacity: 1;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
  fieldset {
    margin: 0;
    border: none;
    display: flex;
    gap: 4rem;
  }
`

export const ContactButton = styled.button`
  margin: 3rem 0;
  background: #45ddfb;
  border: none;
  border-radius: 2rem;
  color: #151517;
  padding: 0.75rem 6rem;
  align-self: center;
  font: 600 1.5rem 'Open Sans', sans-serif;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`
