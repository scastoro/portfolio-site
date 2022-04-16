import styled from 'styled-components'
import { devices } from '../Styles/breakpoints'

export const StyledHeader = styled.header`
  .background-image {
    margin-top: -7%;
    z-index: -1;
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
