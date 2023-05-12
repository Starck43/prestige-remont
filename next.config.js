const path = require("path")
const isProduction = process.env.NODE_ENV === "production"
const serverName = `https://${process.env.SERVER_HOST}`
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
})
module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: isProduction,
    productionBrowserSourceMaps: !isProduction,
    env: {
        SERVER: serverName,
        GRAPHQL_URL: serverName + "/qraphql",
        API_ENDPOINTS: {
            sendMessage: "/wp-json/contact/v1/send",
        },
    },
    publicRuntimeConfig: {},
    serverRuntimeConfig: {
        // Will only be available on the server side
        // mySecret: 'secret',
        // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    images: {
        domains: [process.env.SERVER_HOST],
        deviceSizes: [320, 768, 1024, 1400, 1920], // breakpoints
    },
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: {
            displayName: true,
            ssr: true,
        },
        relay: {
            src: "./",
            artifactDirectory: "./__generated__",
            //language: "typescript",
        },
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    eslint: {
        dirs: ["pages", "core", "components"],
    },
    async headers() {
        return [
            /*            {
                source: "/fonts/Montserrat-Regular.woff2",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },*/
        ]
    },
})
