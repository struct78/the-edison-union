import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// Styles
import { GlobalStyle } from '../styles/global.js'

// Components

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            company,
            description,
            siteUrl,
            keywords
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
            { itemprop: "image", content: `${data.site.siteMetadata.siteUrl}/images/og-image.png` },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: data.site.siteMetadata.title },
            { name: "twitter:description", content: data.site.siteMetadata.description },
            { name: "twitter:image:src", content: `${data.site.siteUrl}/images/og-image.png` },
            { property: "og:title", content: data.site.siteMetadata.title },
            { property: "og:type", content: "website" },
            { property: "og:url", content: `${data.site.siteMetadata.siteUrl}`},
            { property: "og:image", content: `${data.site.siteUrl}/images/og-image.png` },
            { property: "og:image:secure_url", content: `${data.site.siteUrl}/images/og-image.png` },
            { property: "og:image:type", content: "image/png" },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { property: "og:description", content: data.site.siteMetadata.description },
            { property: "og:site_name", content: data.site.siteMetadata.company },
          ]}
        >
          <html lang="en" />
          <link href="https://fonts.googleapis.com/css?family=Rajdhani:100,400|Roboto+Slab:100,200,300,400" rel="stylesheet"/>
          <meta name="google-site-verification" content="MJDFKPslztppagIFWP9KbeVemhd_jI70eeatBQ3-bRo" />
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
