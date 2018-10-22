import React from 'react'
import styled from 'styled-components'
import { colours, spacing } from '../styles/variables'

const Section = ({ variant, children }) => (
  <SectionContainer variant={variant}>
    {children}
  </SectionContainer>
)

const SectionContainer = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: ${spacing.md};
  box-sizing: border-box;

  ${props => {
    return `
      background-color: ${colours[props.variant || 'default'].background};
      color: ${colours[props.variant || 'default'].text};
    `
  }}
`
export default Section
