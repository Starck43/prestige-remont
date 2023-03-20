import { useEffect } from "react"
import { useRouter } from "next/router"
import { ThemeProvider } from "@mui/material/styles"

import * as gtag from "/core/libs/gtag"
import theme from "/core/theme"

// import "/styles/vendors/vendors.scss"
import "/styles/main.sass"

export default function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const isProduction = process.env.NODE_ENV === "production"

    useEffect(() => {
        if (isProduction) {
            const handleRouteChange = url => gtag.pageview(url)
            router.events.on("routeChangeComplete", handleRouteChange)
            return () =>
                router.events.off("routeChangeComplete", handleRouteChange)
        }
    }, [isProduction, router.events])

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
