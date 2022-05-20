//const isProduction = process.env.NODE_ENV === "production"
//const serverName = isProduction ? `https://wp.престиж-ремонт.рф` : 'https://wp.престиж-ремонт.рф'

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Престиж Ремонт`,
    description: `Строительно-монтажные и отделочные работы квартир, домов, офисов любой сложности под ключ`,
    keywords: `отделочные работы, евроремонт, ремонт квартиры, ремонт офиса, ремонт коттеджа, ремонт под ключ, бригада отделочников, малярные работы`,
    author: `@iStarck`,
    authorUrl: `http://istarck.ru`,
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
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
      },
    },
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
        url:
          process.env.WPGRAPHQL_URL || process.env.SERVER + `/qraphql`,
        type: {
          MediaItem: { lazyNodes: true, createFileNodes: false },
          Menu: {
            exclude: true,
          },
          MenuItem: {
            exclude: true,
          },
          User: {
            exclude: true,
          },
          UserRole: {
            exclude: true,
          },
          PostFormat: {
            exclude: true,
          },
          Comment: {
            exclude: true,
          },
          Tag: {
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
          //createStaticFiles: false,
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
