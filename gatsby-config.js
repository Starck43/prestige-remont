module.exports = {
  siteMetadata: {
    title: `Сайт Престиж-ремонт43`,
    description: `Строительные услуги`,
    author: `@iStarck`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: process.env.WPGRAPHQL_URL || `https://престиж-ремонт.рф/wp/qraphql`,
        type: {
          MediaItem: { lazyNodes: true },
          Menu: {
            exclude: true,
          },
          User: {
            exclude: true,
          },
        },
        schema: {
          perPage: 20,
          queryDepth: 5,
          timeout: 60000,
        },
        html: {
          useGatsbyImage: false,
          createStaticFiles: false,
        },
        develop: {
          hardCacheData: false,
        },
        production: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            showQueryVarsOnError: true,
            showQueryOnError: true,
          },
          //preview: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-prestige-remont`,
        short_name: `prestige-remont`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
