import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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

    fetch('/', {
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
          <label htmlFor="name">Name</label>
          <Input type="text" name="name" required onChange={this.handleChange} />
        </FieldGroup>
        <FieldGroup>
          <label htmlFor="email">Email</label>
          <Input type="text" name="email" required onChange={this.handleChange} />
        </FieldGroup>
        <FieldGroup>
          <label htmlFor="phone">Phone</label>
          <Input type="text" name="phone" required onChange={this.handleChange} />
        </FieldGroup>
        <FieldGroup>
          <label htmlFor="phone">Company</label>
          <Input type="text" name="company" required onChange={this.handleChange} />
        </FieldGroup>
        <FieldGroup className="field-group--full">
          <label htmlFor="message">Give us a problem to solve</label>
          <TextArea name="message" required onChange={this.handleChange} />
        </FieldGroup>
        <FieldGroup>
          <Button>Send Enquiry</Button>
        </FieldGroup>
      </FieldSet>);
    }
  }

  render() {
    return (<Layout>
        <Section variant="pink">
          <Title variant="pink">The Edison Union</Title>
        </Section>
        <Section variant="grey_pink">
          <SubTitle variant="grey_pink">What is the Edison Union?</SubTitle>
          <Copy>The Edison Union is a creative technology collective.
          We work with architects, designers, clients, and customers to create
          unforgettable experiences with technology at their core.</Copy>
        </Section>
        <Section variant="blue">
          <SubTitle variant="blue">What do we specialise in?</SubTitle>
          <Copy>We are not a traditional digital agency or production house &mdash;
          we are conceptualists, technologists, and problem solvers.
          We have been known to make a few things, though. Our services include:</Copy>

          <List variant="blue">
            <ListItem>API development</ListItem>
            <ListItem>Augmented Reality</ListItem>
            <ListItem>Data visualisation & sonification</ListItem>
            <ListItem>Digital windows</ListItem>
            <ListItem>Electronic prototyping</ListItem>
            <ListItem>Experiential &amp; OOH advertising</ListItem>
            <ListItem>Interactive installations</ListItem>
            <ListItem>IOT platforms</ListItem>
            <ListItem>Light sculptures</ListItem>
            <ListItem>Office automation</ListItem>
            <ListItem>Projection mapping</ListItem>
            <ListItem>VX & Chatbots</ListItem>
          </List>
        </Section>
        <Section variant="grey_blue">
          <SubTitle variant="grey_blue">Our Philosophy</SubTitle>
          <Copy>We love technology, but we believe it should always come second to the idea. We are creatives first, engineers second.</Copy>
        </Section>
        <Section variant="purple">
          <SubTitle variant="purple">Contact</SubTitle>
          <Form name="Contact Form" action="/" data-netlify="true" data-netlify-honeypot="bang" onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="Contact Form" />
            { this.getFormContent() }
          </Form>
        </Section>
        {/*<ImageGrid>
          <ImageBox>
            <img src="https://via.placeholder.com/1000x1000"/>
          </ImageBox>
          <ImageBox>
            <img src="https://via.placeholder.com/1000x1000"/>
          </ImageBox>
          <ImageBox>
            <img src="https://via.placeholder.com/1000x1000"/>
          </ImageBox>
          <ImageBox>
            <img src="https://via.placeholder.com/1000x1000"/>
          </ImageBox>
          <ImageBox>
            <img src="https://via.placeholder.com/1000x1000"/>
          </ImageBox>
          <ImageBox>
            <img src="https://via.placeholder.com/1000x1000"/>
          </ImageBox>
          <ImageBox>
            <img src="https://via.placeholder.com/1000x1000"/>
          </ImageBox>
          <ImageBox>
            <img src="https://via.placeholder.com/1000x1000"/>
          </ImageBox>
        </ImageGrid>*/}
      </Layout>
    )
  }
}

const Title = styled.h1`
  color: ${props => colours[props.variant].title};
  font-family: ${fonts.title};
  font-size: ${typography.h1};
  font-weight: 100;
  text-transform: uppercase;
`

const SubTitle = styled.h2`
  color: ${props => colours[props.variant].title};
  font-family: ${fonts.title};
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
  }

  li::before {
    color: ${props => colours[props.variant].title};
  }
`

const ListItem = styled.li`
  font-weight: 400;
  position: relative;

  &::before {
    border-bottom: 1px solid currentColor;
    bottom: -${spacing.xs};
    content: '';
    left: -${spacing.default};
    position: absolute;
    top: 50%;
    width: 1rem;
  }
`

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-row-gap: 0;
  grid-template-columns: repeat(1, 1fr);
  line-height: 1;

  ${above.sm`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${above.md`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${above.lg`
    grid-template-columns: repeat(4, 1fr);
  `}
`

const ImageBox = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
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

  input:focus,
  textarea:focus,
  button: focus {
    border: 1px solid ${colours.purple.text};
    outline: none;
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
  background-color: ${colours.purple.button};
  border: 0;
  border: 1px solid transparent;
  color: ${colours.purple.text};
  cursor: se-resize;
  margin-top: ${spacing.sm};
  padding: ${spacing.sm};
  transition: all ${timings.md}s ease-in-out;

  &:hover {
    background-color: ${colours.purple.title};
  }
`

export default IndexPage
