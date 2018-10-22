import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import NetlifyForm from 'react-netlify-form'

// CSS
import { colours, fonts, spacing, timings, typography } from '../styles/variables'
import { above } from '../styles/mixins'

// Components
import Layout from '../components/layout'
import Section from '../components/section'

const IndexPage = () => (
  <Layout>
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
      <Copy>We are not a traditional digital agency, or production house &mdash;
      we are conceptualists, technologists, and problem solvers.
      Our past work includes, but is not limited to:</Copy>

      <List variant="blue">
        <ListItem>Data visualisation & sonification</ListItem>
        <ListItem>Electronic prototyping</ListItem>
        <ListItem>Experiential advertising</ListItem>
        <ListItem>Interactive installations</ListItem>
        <ListItem>Interactive store windows</ListItem>
        <ListItem>IOT platforms</ListItem>
        <ListItem>Light sculptures</ListItem>
        <ListItem>Projection mapping</ListItem>
      </List>
    </Section>
    <Section variant="grey_blue">
      <SubTitle variant="grey_blue">Our Philosophy</SubTitle>
      <Copy>Technology should always support the idea.
      Technology should be as invisible as possible.
      Our solutions should always leave people wondering “How did they do that?”</Copy>
    </Section>
    <Section variant="purple">
      <SubTitle variant="purple">Contact</SubTitle>
      <NetlifyForm name="Contact Form" honeypotName="bang">
        {({ loading, error, success }) => (
          <div>
            {loading &&
              <Copy>Loading...</Copy>
            }
            {error &&
              <Copy>Your information was not sent. Please try again later.</Copy>
            }
            {success &&
              <Copy>Thank you for contacting us!</Copy>
            }
            {!loading && !success &&
              <FieldSet>
                <FieldGroup>
                  <label for="name">Name</label>
                  <Input type="text" name="name" required />
                </FieldGroup>
                <FieldGroup>
                  <label for="email">Email</label>
                  <Input type="text" name="email" required />
                </FieldGroup>
                <FieldGroup>
                  <label for="phone">Phone</label>
                  <Input type="text" name="phone" required />
                </FieldGroup>
                <FieldGroup>
                  <label for="phone">Company</label>
                  <Input type="text" name="company" required />
                </FieldGroup>
                <FieldGroup className="field-group--full">
                  <label for="message">Tell us a story</label>
                  <TextArea name="message" required />
                </FieldGroup>
                <FieldGroup>
                  <Button>Send Enquiry</Button>
                </FieldGroup>
              </FieldSet>
            }
          </div>
        )}
      </NetlifyForm>
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

const FieldSet = styled.div`
  display: grid;
  grid-gap: ${spacing.md};
  grid-row-gap: ${spacing.sm};
  grid-template-columns: repeat(2, 1fr);
  margin-top: ${spacing.md};
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
