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
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: ${spacing.md};
  box-sizing: border-box;

  ${above.md`
    padding: ${spacing.md} ${spacing.xl};
  `}

  ${above.lg`
    padding: ${spacing.md} ${spacing.xl};
  `}

  ${props => {
    return `
      background-color: ${colours[props.variant || 'default'].background};
      color: ${colours[props.variant || 'default'].text};
    `
  }}
`
export default Section
