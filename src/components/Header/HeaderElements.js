import styled from 'styled-components'
import { devices } from '../Styles/breakpoints'

export const StyledHeader = styled.header`
  .background-image {
    margin-top: -7%;
    z-index: -1;
  }

  @media only screen and (max-width: 1450px) and (min-width: 1300px) {
    .background-image {
      margin-top: -7.5%;
    }
  }
  @media ${devices.mobileL} {
    .background-image {
      display: none;
    }
  }
  @media ${devices.desktop} {
    .background-image {
      margin-top: -14rem;
    }
  }
`
