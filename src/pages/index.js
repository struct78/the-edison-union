import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Work from '../components/work'
import Heading from '../components/heading'
import ContactForm from '../components/contactForm'
import Copy from '../components/copy'

// CSS
import { colours, fonts, spacing, typography } from '../styles/variables'

// Components
import Layout from '../components/layout'
import Section from '../components/section'

export const workImage = graphql`
fragment workImage on File {
  childImageSharp {
    fluid(maxWidth: 1024, maxHeight: 1024, quality: 96) {
      ...GatsbyImageSharpFluid_withWebp
    }
  }
}
`

export const query = graphql`
  query {
    siliconBlock:file(relativePath: { eq: "work-silicon-block.jpg" }) {
      ...workImage
    }
    catmullClark:file(relativePath: { eq: "work-catmull-clark.png" }) {
      ...workImage
    }
    vivienne:file(relativePath: { eq: "work-vivienne.jpg" }) {
      ...workImage
    }
    faultTrace:file(relativePath: { eq: "work-fault-trace.jpg" }) {
      ...workImage
    }
    hemeshGUI:file(relativePath: { eq: "work-hemesh-gui.jpg" }) {
      ...workImage
    }
    droneStrikeCuff:file(relativePath: { eq: "work-drone-strike-cuff.jpg" }) {
      ...workImage
    }
    radiationOrchestra:file(relativePath: { eq: "work-radiation-orchestra.jpg" }) {
      ...workImage
    }
    genesis:file(relativePath: { eq: "work-genesis.png" }) {
      ...workImage
    }
    airPiano:file(relativePath: { eq: "work-air-piano.png" }) {
      ...workImage
    }
    amsterdamToAntwerp:file(relativePath: { eq: "work-amsterdam-to-antwerp.png" }) {
      ...workImage
    }
    structs:file(relativePath: { eq: "work-structs.png" }) {
      ...workImage
    }
    concertoAutomata:file(relativePath: { eq: "work-concerto-automata.png" }) {
      ...workImage
    }
  }
`

class IndexPage extends Component {
  render() {
    return (
        <Layout>
          <Section variant="default_alternate">
            <Heading><Title variant="default_alternate">The Edison Union</Title></Heading>
          </Section>
          <Section variant="default">
            <Heading><SubTitle variant="default">What is the Edison Union?</SubTitle></Heading>
            <Copy>The Edison Union is a creative technology collective.
            We create unforgettable experiences with technology at their core.</Copy>
          </Section>
          <Section variant="default_alternate">
            <Heading><SubTitle variant="default_alternate">What do we specialise in?</SubTitle></Heading>
            <Copy>We are not a traditional digital agency or production house &mdash;
            we are conceptual thinkers, technologists, and problem solvers.
            Some of our past and present projects include:</Copy>

            <List variant="default_alternate">
              <ListItem>Data jewellery</ListItem>
              <ListItem>Data visualisation & sonification</ListItem>
              <ListItem>Electronic prototyping</ListItem>
              <ListItem>Generative art</ListItem>
              <ListItem>Interactive windows &amp; installations</ListItem>
              <ListItem>Light installations</ListItem>
              <ListItem>Projection mapping</ListItem>
            </List>
          </Section>
          <Work {...this.props}/>
          <Section variant="default">
            <Heading><SubTitle variant="default">Our Philosophy</SubTitle></Heading>
            <Copy>We love technology, but we believe it should always come second to the idea. We are creatives first, engineers second.</Copy>
          </Section>
          <Section variant="default_alternate">
            <Heading><SubTitle variant="default_alternate">Contact Us</SubTitle></Heading>
            <ContactForm/>
          </Section>
        </Layout>
    );
  }
}

const Title = styled.h1`
  color: ${props => colours[props.variant].title};
  font-family: ${fonts.title};
  font-size: ${typography.h1};
  font-weight: 500;
  text-transform: uppercase;
`

const SubTitle = styled.h2`
  color: ${props => colours[props.variant].title};
  font-family: ${fonts.subtitle};
  font-size: ${typography.h2};
  font-weight: 100;
  text-transform: uppercase;
`

const List = styled.ul`
  column-gap: ${spacing.md};
  line-height: 1.8;
  margin: ${spacing.sm} 0 0;
  position: relative;

  * + * {
    margin-top: ${spacing.sm};

    &::before {
      border-bottom: 1px solid currentColor;
      top: -${spacing.xs};
      content: '';
      left: 0;
      position: absolute;
      width: 1rem;
    }
  }

  li::before {
    color: ${props => colours[props.variant].title};
  }
`

const ListItem = styled.li`
  font-weight: 400;
  position: relative;
`

export default IndexPage
