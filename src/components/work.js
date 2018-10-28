import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

// CSS
import { colours, spacing, timings } from '../styles/variables'
import { above } from '../styles/mixins'

export const Work = ({ data }) => (
  <ImageGrid>
    <ImageBox>
      <figure>
        <Img fluid={data.vivienne.childImageSharp.fluid}/>
        <figcaption>
          <strong>Vivienne</strong>
          <span>Sound visualisation</span>
        </figcaption>
      </figure>
    </ImageBox>
    <ImageBox>
      <figure>
        <Img fluid={data.faultTrace.childImageSharp.fluid}/>
        <figcaption>
          <strong>Fault Trace</strong>
          <span>Data sonification</span>
        </figcaption>
      </figure>
    </ImageBox>
    <ImageBox>
      <figure>
        <Img fluid={data.hemeshGUI.childImageSharp.fluid}/>
        <figcaption>
          <strong>Hemesh GUI</strong>
          <span>Software</span>
        </figcaption>
      </figure>
    </ImageBox>
    <ImageBox>
      <figure>
        <Img fluid={data.radiationOrchestra.childImageSharp.fluid}/>
        <figcaption>
          <strong>Radiation Orchestra</strong>
          <span>Installation</span>
        </figcaption>
      </figure>
    </ImageBox>
    <ImageBox>
      <figure>
        <Img fluid={data.genesis.childImageSharp.fluid}/>
        <figcaption>
          <strong>Genesis</strong>
          <span>Data visualisation</span>
        </figcaption>
      </figure>
    </ImageBox>
    <ImageBox>
      <figure>
        <Img fluid={data.airPiano.childImageSharp.fluid}/>
        <figcaption className="reversed">
          <strong>Air Piano</strong>
          <span>Installation</span>
        </figcaption>
      </figure>
    </ImageBox>
  </ImageGrid>)



const ImageGrid = styled.section`
  display: grid;
  grid-gap: 1px;
  grid-row-gap: 0;
  grid-template-columns: repeat(1, 1fr);
  line-height: 1;

  ${above.sm`
    grid-template-columns: repeat(3, 1fr);
  `}
`

const ImageBox = styled.div`
  figure {
    position: relative;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: auto;
      transition: transform ${timings.lg}s ease-in-out !important;
    }

    figcaption {
      align-items: center;
      color: ${colours.work.text};
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transform: translateY(${spacing.sm});
      transition: opacity ${timings.lg}s ease-in-out, transform ${timings.lg}s ease-in-out;
      width: 100%;

      span {
        margin-top: ${spacing.xs};
        font-size: 1rem;
      }

      &.reversed {
        color: ${colours.work.shadow};
        &:hover {
          text-shadow: 1px 1px ${colours.work.text};
        }
      }
    }

    &:hover,
    &:focus,
    &:active {
      figcaption {
        opacity: 1;
        transform: translateY(0);
        text-shadow: 1px 1px ${colours.work.shadow};
      }

      img {
        transform: scale(1.2);
      }
    }
  }
`

export default Work
