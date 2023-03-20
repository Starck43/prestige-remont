import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 576,
            laptop: 992,
            desktop: 1200,
        },
    },
    palette: {
        primary: {
            light: "#DEB887FF",
            main: "#A98250FF",
            contrastText: "#444",
        },
        secondary: {
            main: "#edf2ff",
        },
        overlay: {
            main: "#FFF",
        },
    },
})

export default theme
