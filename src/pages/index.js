import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// CSS
import { colours, fonts, spacing, typography } from '../styles/variables'
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
      <SubTitle variant="blue">Our Philosophy</SubTitle>
      <Copy>Our technology should always support the idea.
      The technology should be as invisible as possible.
      Our solutions should always leave people wondering “How did they do that?”</Copy>
    </Section>
    <Section variant="grey_blue">
      <SubTitle variant="grey_blue">What do we specialise in?</SubTitle>
      <Copy>We are not a traditional digital agency, or production house &mdash;
      we are conceptualists, technologists, and problem solvers.
      Our past work includes, but is not limited to:</Copy>

      <List variant="grey_blue">
        <ListItem>Creative concept development</ListItem>
        <ListItem>Data visualisation & sonification</ListItem>
        <ListItem>Digital store windows</ListItem>
        <ListItem>Electronic prototyping</ListItem>
        <ListItem>Experiential advertising</ListItem>
        <ListItem>Interactive installations</ListItem>
        <ListItem>IOT platforms</ListItem>
        <ListItem>Light sculptures</ListItem>
        <ListItem>Projection mapping</ListItem>
      </List>
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
  text-transform: uppercase;
  font-size: ${typography.h1};
  font-weight: 100;
`

const SubTitle = styled.h2`
  color: ${props => colours[props.variant].title};
  font-family: ${fonts.title};
  text-transform: uppercase;
  font-size: ${typography.h2};
  font-weight: 100;
`

const Copy = styled.p`
  margin: 2rem 0;
  max-width: 45rem;
  color: ${colours.text};
`

const List = styled.ul`
  position: relative;
  margin: ${spacing.sm} 0 0;
  line-height: 1.8;
  column-gap: ${spacing.md};

  * + * {
    margin-top: ${spacing.sm};

    &::before {
      content: '';
      width: 1.5rem;
      border-bottom: 1px solid currentColor;
      position: absolute;
      top: -${spacing.xs};
      left: 50%;
      transform: translateX(-50%);
    }
  }

  li::before {
    color: ${props => colours[props.variant].title};
  }
`

const ListItem = styled.li`
  position: relative;
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

export default IndexPage
