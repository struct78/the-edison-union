import React from 'react'
import styled from 'styled-components'
import { colours, spacing } from '../styles/variables'
import { above } from '../styles/mixins'

const Section = ({ variant, children }) => (
  <SectionContainer variant={variant}>
    {children}
  </SectionContainer>
)

const SectionContainer = styled.section`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  padding: ${spacing.md};
  width: 100vw;

  ${above.md`
    padding: ${spacing.lg} ${spacing.xl};
  `}

  ${props => {
    return `
      background-color: ${colours[props.variant || 'default'].background};
      color: ${colours[props.variant || 'default'].text};
    `
  }}
`
export default Section
