import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background: #0d0d0d;
  color: #f8f8f8;
  padding: 7rem 0 2rem;

  .copyright {
    text-align: center;
    margin-top: 6rem;
    color: #c4c4c4;
    font: italic 400 1.2rem 'Poppins', sans-serif;
  }
`

export const FooterContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`

export const HelloSection = styled.section`
  font-family: 'Poppins', sans-serif;
  padding-left: 0.5rem;
  position: relative;
  padding-left: 1rem;

  &::before {
    top: 3px;
    position: absolute;
    content: '';
    width: 1px;
    border-left: 1px solid #45ddf8;
    height: 80%;
  }
  h4 {
    color: #45ddf8;
    font: 500 1.75rem 'Poppins', sans-serif;
    margin: 0 1rem 0;
    line-height: 1.75rem;
  }
  p {
    margin: 0.75rem 1rem 0;
    font: 400 1.35rem 'Poppins', sans-serif;
  }
`

export const SocialMediaSection = styled.section`
  margin-left: 90px;
  position: relative;

  &::before {
    top: 3px;
    position: absolute;
    content: '';
    width: 1px;
    border-left: 1px solid #45ddf8;
    height: 80%;
  }

  h4 {
    color: #45ddf8;
    font: 500 1.75rem 'Poppins', sans-serif;
    margin: 0 1rem 0;
    line-height: 1.75rem;
  }
  a {
    display: inline-block;
    margin: 0.75rem 1rem 0;
    font: 400 1.35rem 'Poppins', sans-serif;

    &:hover {
      opacity: 0.75;
    }
  }
`
