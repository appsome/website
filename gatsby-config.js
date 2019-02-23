module.exports = {
  siteMetadata: {
    title: `Appsome!`,
    description: `SaaS, IoT and mobility solutions`,
    author: `Team Appsome!`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `appsome-website`,
        short_name: `appsome`,
        start_url: `/`,
        background_color: `#0276BD`,
        theme_color: `#0276BD`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the
        // root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline
    // functionality To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
