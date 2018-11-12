import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// Styles
import { GlobalStyle } from '../styles/global.js'

// Components
//
//

const Layout = ({ children }) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              name,
              title,
              description,
              siteUrl,
              keywords,
              google_site_verification,
              og {
                image
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            script={[{
              innerHTML: `var WebFontConfig = {
                google: {
                  families: ['Raleway:100,400,700', 'Rajdhani:100,400', 'Roboto Slab:100,200,300,400'],
                }
              };
              (function(d) {
                  var wf = d.createElement('script'), s = d.scripts[0];
                  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
                  wf.async = true;
                  s.parentNode.insertBefore(wf, s);
               })(document);`
            }]}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords },
              { itemprop: "image", content: data.site.siteMetadata.og.image },
              { name: "twitter:card", content: "summary_large_image" },
              { name: "twitter:title", content: data.site.siteMetadata.title },
              { name: "twitter:description", content: data.site.siteMetadata.description },
              { name: "twitter:image:src", content: data.site.siteMetadata.og.image },
              { property: "og:title", content: data.site.siteMetadata.title },
              { property: "og:type", content: "website" },
              { property: "og:url", content: `${data.site.siteMetadata.siteUrl}`},
              { property: "og:image", content: data.site.siteMetadata.og.image },
              { property: "og:image:secure_url", content: data.site.siteMetadata.og.image },
              { property: "og:image:type", content: "image/png" },
              { property: "og:image:width", content: "1200" },
              { property: "og:image:height", content: "630" },
              { property: "og:description", content: data.site.siteMetadata.description },
              { property: "og:site_name", content: data.site.siteMetadata.name },
              { name: "google-site-verification", content: data.site.siteMetadata.google_site_verification }
            ]}
          >
            <html lang="en" />
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
