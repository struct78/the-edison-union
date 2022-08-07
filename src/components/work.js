import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

// CSS
import { colours, spacing, timings, typography } from '../styles/variables'
import { above } from '../styles/mixins'

export const Work = ({ data }) => (
  <ImageGrid>
    <ImageBox>
      <figure>
        <Img fluid={data.catmullClark.childImageSharp.fluid}/>
        <figcaption>
          <strong>Catmull-Clark</strong>
          <span>3D Model</span>
        </figcaption>
      </figure>
    </ImageBox>
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
        <Img fluid={data.siliconBlock.childImageSharp.fluid}/>
        <figcaption className="reversed">
          <strong>Silicon Block</strong>
          <span>Live Audio Visualisation</span>
        </figcaption>
      </figure>
    </ImageBox>
    <ImageBox>
      <figure>
        <Img fluid={data.amsterdamToAntwerp.childImageSharp.fluid}/>
        <figcaption className="reversed">
          <strong>Ring</strong>
          <span>Data Jewellery</span>
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
        <Img fluid={data.droneStrikeCuff.childImageSharp.fluid}/>
        <figcaption className="reversed">
          <strong>Drone Strike Cuff</strong>
          <span>Data Jewellery</span>
        </figcaption>
      </figure>
    </ImageBox>
    <ImageBox>
      <figure>
        <Img fluid={data.structs.childImageSharp.fluid}/>
        <figcaption className="reversed">
          <strong>Structs</strong>
          <span>Generative Art</span>
        </figcaption>
      </figure>
    </ImageBox>
    <ImageBox>
      <figure>
        <Img fluid={data.concertoAutomata.childImageSharp.fluid}/>
        <figcaption className="reversed">
          <strong>Concerto Automata</strong>
          <span>Generative Music</span>
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
    grid-template-columns: repeat(2, 1fr);
  `}

  ${above.md`
    grid-template-columns: repeat(3, 1fr);
  `}
`

const ImageBox = styled.div`
  figure {
    background-color: ${colours.work.shadow};
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%;

    img {
      display: block;
      height: auto;
      transition: all ${timings.lg}s ease-in-out!important;
      width: 100%;
    }

    figcaption {
      align-items: center;
      color: ${colours.work.text};
      display: flex;
      flex-direction: column;
      font-family: 'TT Firs Neue Light';
      height: 100%;
      justify-content: center;
      left: 0;
      opacity: 0;
      position: absolute;
      text-transform: uppercase;
      top: 0;
      transform: translateY(${spacing.sm});
      transition: opacity ${timings.lg}s ease-in-out, transform ${timings.lg}s ease-in-out;
      width: 100%;

      strong {
        font-size: ${typography.h3};
        text-align: center;

        ${above.sm`
          font-size: ${typography.h4};
        `}

        ${above.xl`
          font-size: ${typography.h3};
        `}
      }

      span {
        font-family: 'TT Firs Neue Medium';
        font-size: 1rem;
        margin-top: ${spacing.xs};
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
        text-shadow: 1px 1px ${colours.work.shadow};
        transform: translateY(0);
      }

      img {
        filter: blur(.5rem);
        transform: scale(1.2);
      }
    }
  }
`

export default Work
