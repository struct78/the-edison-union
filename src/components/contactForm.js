import React, { Component } from 'react'
import styled from 'styled-components'

import Copy from '../components/copy'

import { colours, fonts, spacing, timings } from '../styles/variables'
import { below, above } from '../styles/mixins'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    if (this.state.sent) {
      return (<Copy>Thank you for contacting us!</Copy>);
    }
    else if (this.state.error) {
      return (<Copy>Your information was not sent. Please try again later.</Copy>);
    }
    else {
      return (
      <Form name="Contact Form" action="/" data-netlify="true" data-netlify-honeypot="bang" onSubmit={this.handleSubmit}>
        <FieldSet>
          <FieldGroup className="hidden">
            <label htmlFor="bang" id="message-bang">Title</label>
            <Input type="text" id="bang" aria-labelledby="message-bang" name="bang" required onChange={this.handleChange} />
          </FieldGroup>
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
        </FieldSet>
      </Form>);
    }
  }
}

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

  &.hidden {
    display: none;
  }

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

export default ContactForm
