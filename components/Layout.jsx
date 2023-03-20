import { Fragment } from "react"
import DATA from "/core/constants"

import Seo from "./Seo"
import Copyright from "./footer/Copyright"

export const Layout = ({ children }) => (
    <Fragment>
        <Seo {...DATA} />
        <main id="main">{children}</main>
        <Copyright {...DATA} />
    </Fragment>
)
