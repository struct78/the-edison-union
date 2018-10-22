import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// Styles

//import styled, { injectGlobal } from "styled-components"
//import * as variables from "../style/variables"
import { GlobalStyle } from '../styles/global.js'

// Components

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" />
          <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Condensed:100,400|Rajdhani:100,400|Roboto+Slab:100,200,300,400" rel="stylesheet"/>
        </Helmet>
        <GlobalStyle/>
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
