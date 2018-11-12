import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Work from '../components/work'
import Heading from '../components/heading'

// CSS
import { colours, fonts, spacing, timings, typography } from '../styles/variables'
import { below, above } from '../styles/mixins'

// Components
import Layout from '../components/layout'
import Section from '../components/section'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export const workImage = graphql`
fragment workImage on File {
  childImageSharp {
    fluid(maxWidth: 1024, maxHeight: 1024, quality: 96) {
      ...GatsbyImageSharpFluid_withWebp
    }
  }
}
`;

export const query = graphql`
  query {
    vivienne:file(relativePath: { eq: "work-vivienne.jpg" }) {
      ...workImage
    }
    faultTrace:file(relativePath: { eq: "work-fault-trace.jpg" }) {
      ...workImage
    }
    hemeshGUI:file(relativePath: { eq: "work-hemesh-gui.jpg" }) {
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
  constructor(props) {
    super(props);
    this.state = { };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    fetch('/?t=' + new Date().getTime(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
    .then(() => {
      this.setState({ sent: true })
    })
    .catch(error => {
      this.setState({ sent: false, error: true })
    });
  }

  getFormContent() {
    if (this.state.sent) {
      return (<Copy>Thank you for contacting us!</Copy>);
    }
    else if (this.state.error) {
      return (<Copy>Your information was not sent. Please try again later.</Copy>);
    }
    else {
      return (<FieldSet>
        <FieldGroup>
          <label htmlFor="name" id="message-name">Name</label>
          <Input type="text" id="name" aria-labelledby="message-name" name="name" required onChange={this.handleChange} />
        </FieldGroup>
        <FieldGroup>
          <label htmlFor="email" id="message-email">Email</label>
          <Input type="text" id="email" aria-labelledby="message-email" name="email" required onChange={this.handleChange} />
        </FieldGroup>
        <FieldGroup>
          <label htmlFor="phone" id="message-phone">Phone</label>
          <Input type="text" id="phone" aria-labelledby="message-phone" name="phone" required onChange={this.handleChange} />
        </FieldGroup>
        <FieldGroup>
          <label htmlFor="company" id="message-company">Company</label>
          <Input type="text" id="company" aria-labelledby="message-company" name="company" required onChange={this.handleChange} />
        </FieldGroup>
        <FieldGroup className="field-group--full">
          <label htmlFor="message" id="message-label">Give us a problem to solve</label>
          <TextArea id="message" aria-labelledby="message-label" name="message" required onChange={this.handleChange} />
        </FieldGroup>
        <FieldGroup>
          <Button>Send Enquiry</Button>
        </FieldGroup>
      </FieldSet>);
    }
  }

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
              <ListItem>API development</ListItem>
              <ListItem>Data jewellery</ListItem>
              <ListItem>Data visualisation & sonification</ListItem>
              <ListItem>Electronic prototyping</ListItem>
              <ListItem>Experiential &amp; OOH advertising</ListItem>
              <ListItem>Generative art</ListItem>
              <ListItem>Interactive windows &amp; installations</ListItem>
              <ListItem>IOT platforms</ListItem>
              <ListItem>Light installations</ListItem>
              <ListItem>Projection mapping</ListItem>
              <ListItem>VX & Chatbots</ListItem>
            </List>
          </Section>
          <Work {...this.props}/>
          <Section variant="default">
            <Heading><SubTitle variant="default">Our Philosophy</SubTitle></Heading>
            <Copy>We love technology, but we believe it should always come second to the idea. We are creatives first, engineers second.</Copy>
          </Section>
          <Section variant="default_alternate">
            <Heading><SubTitle variant="default_alternate">Contact</SubTitle></Heading>
            <Form name="Contact Form" action="/" data-netlify="true" data-netlify-honeypot="bang" onSubmit={this.handleSubmit}>
              { this.getFormContent() }
            </Form>
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

const Copy = styled.p`
  color: ${colours.text};
  margin: 2rem 0;
  max-width: 45rem;
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

const Form = styled.form`
  display: flex;
  width: 100%;

  ${above.md`
    width: 50%;
  `}
`

const FieldSet = styled.div`
  margin-top: ${spacing.md};
  width: 100%;

  ${above.sm`
    display: grid;
    grid-gap: ${spacing.md};
    grid-row-gap: ${spacing.sm};
    grid-template-columns: repeat(2, 1fr);
  `}
`

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;

  &.field-group--full {
    grid-column: 1 / 3;
  }

  label {
    margin-bottom: ${spacing.xs};
  }

  input,
  textarea,
  button {
    transition: all ${timings.md}s ease-in-out;
  }

  input:focus,
  textarea:focus,
  button: focus {
    border: 1px solid ${colours.default.text};
    outline: none;
  }

  button {
    font-family: ${fonts.title};
    text-transform: uppercase;
  }

  ${below.sm`
    margin-top: ${spacing.md};
  `}
`

const Input = styled.input`
  border: 1px solid transparent;
  padding: ${spacing.sm};
`

const TextArea = styled.textarea`
  border: 1px solid transparent;
  height: ${spacing.xl};
  padding: ${spacing.sm};
`

const Button = styled.button`
  background-color: ${colours.default_alternate.button};
  border: 0;
  border: 1px solid transparent;
  color: ${colours.default_alternate.text};
  cursor: se-resize;
  margin-top: ${spacing.sm};
  padding: ${spacing.sm};
  transition: all ${timings.md}s ease-in-out;

  &:hover {
    background-color: ${colours.default_alternate.text};
    color: ${colours.default_alternate.button};
  }
`

export default IndexPage
