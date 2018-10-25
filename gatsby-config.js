const path = require('path')

module.exports = {
  siteMetadata: {
    name: 'The Edison Union',
    title: 'The Edison Union',
    description: 'A creative technology collective based in Melbourne, Australia',
    siteUrl: 'https://edisonunion.co',
    keywords: 'Creative Technology, VR, AR, IOT, Interactive windows, Projection Mapping, Processing, Touchdesigner, Data Visualisation, Data Sonification, Light Sculptures',
    google_site_verification: 'MJDFKPslztppagIFWP9KbeVemhd_jI70eeatBQ3-bRo',
    og: {
      image: 'https://edisonunion.co/images/og-image.png'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static/images',
        path: path.join(__dirname, 'static', 'images'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'edison-union',
        short_name: 'starter',
        start_url: '/',
        background_color: '#FF6F84',
        theme_color: '#FF6F84',
        display: 'minimal-ui'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-127969191-1',
        head: true,
        cookieDomain: "edisonunion.co"
      }
    },
    'gatsby-plugin-netlify',
  ],
}
