import React from 'react'
import styled from 'styled-components'
import { colours } from '../styles/variables'

const Copy = ({ children }) => (<CopyContainer>{children}</CopyContainer>);

const CopyContainer = styled.p`
  color: ${colours.text};
  margin: 2rem 0;
  max-width: 45rem;
`

export default Copy;
