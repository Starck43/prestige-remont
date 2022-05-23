const path = require('path')
//const isProduction = process.env.NODE_ENV === "production"
const serverName = `https://${process.env.SERVER_HOST}`


module.exports = {
  i18n: {
    locales: ["ru"],
    defaultLocale: "ru",
  },
  env: {
    SERVER: serverName,
    WORDPRESS_URL: serverName + "/qraphql",
    API_ENDPOINTS: {
      sendMessage: "/wp-json/contact/v1/send",
    },
  },
  publicRuntimeConfig: {
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    // mySecret: 'secret',
    // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  images: {
    domains: [process.env.SERVER_HOST],
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
  async headers() {
    return [
      {
        source: "/fonts/Montserrat-Regular.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/Montserrat-Bold.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
}

