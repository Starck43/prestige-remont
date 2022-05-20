const path = require('path')
//const isProduction = process.env.NODE_ENV === "production"
const serverName = 'https://wp.xn----itbbcj1ahhckeini.xn--p1ai'
const hostName = 'wp.xn----itbbcj1ahhckeini.xn--p1ai'


module.exports = {
  env: {
    SERVER: serverName,
    WORDPRESS_URL: serverName + "/qraphql",
    API_ENDPOINTS: {
      sendMessage: "/wp-json/contact/v1/send",
    },
  },
  publicRuntimeConfig: {
    metadata: {
      title: `Престиж Ремонт`,
      description: `Строительно-монтажные и отделочные работы квартир, домов, офисов любой сложности под ключ`,
      keywords: `отделочные работы, евроремонт, ремонт квартиры, ремонт офиса, ремонт коттеджа, ремонт под ключ, бригада отделочников, малярные работы`,
      author: `@iStarck`,
      authorUrl: `https://istarck.ru`,
    },
    yandexMetrikaId: "88707408",
    googleAnalyticsId: "G-ZBG8YKXFMZ",
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    // mySecret: 'secret',
    // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  images: {
    domains: [hostName],
    deviceSizes: [320, 768, 1024, 1400, 1920], // breakpoints
    imageSizes: [16, 32, 48, 64, 96], // breakpoints
  },
  compiler: {
    // ssr and displayName are configured by default
    //styledComponents: true,
    relay: {
      // This should match relay.config.js
      src: "./",
      artifactDirectory: "./__generated__",
      language: "typescript",
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
}

