module.exports = {
  siteMetadata: {
    company: 'The Edison Union',
    title: 'The Edison Union',
    siteUrl: 'https://edisonunion.co',
    description: 'A creative technology collective based in Melbourne, Australia',
    keywords: 'Creative Technology, VR, AR, IOT, Interactive windows, Projection Mapping, Processing, Touchdesigner, Data Visualisation, Data Sonification, Light Sculptures'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'edison-union',
        short_name: 'starter',
        start_url: '/',
        background_color: '#CD3554',
        theme_color: '#CD3554',
        display: 'minimal-ui'
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`
  ],
}
