import styled from 'styled-components'
import { devices } from '../Styles/breakpoints'

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
  @media ${devices.mobileL} {
    margin: 0 0 10rem 0;

    h2 {
      margin: 2.5rem;
    }
  }

  @media ${devices.laptopL} {
    width: 80%;
    margin: 0 auto 10rem;
  }

  @media ${devices.desktop} {
    width: 65%;
  }

  @media ${devices.desktopL} {
    width: 50%;
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
  }
  @media ${devices.mobileL} {
    width: 85%;
    svg {
      display: none;
    }
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    width: 100%;
    background: #0d0d0d;
    border: none;
    color: white;
    transition: padding-bottom 2s ease-in;

    &::placeholder {
      color: #f8f8f8;
      opacity: 1;
    }
    &:focus::placeholder {
      opacity: 0.75;
    }
    &:focus {
      outline: none;
    }
    &:focus + .line {
      transform: translateY(2px);
    }
  }
  fieldset {
    margin: 0;
    border: none;
    display: flex;
    gap: 4rem;
  }
  .line {
    width: 100%;
    border-bottom: #f8f8f8 solid 1px;
    margin-bottom: 1.5rem;
  }
  @media ${devices.mobileL} {
    fieldset {
      display: block;
    }
  }
`

export const ContactButton = styled.button`
  margin: 3rem 33% 3rem 0;
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
  @media ${devices.mobileL} {
    margin: 2rem 0;
  }
`
