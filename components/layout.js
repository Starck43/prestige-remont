import { Fragment } from "react"
import Meta from "./meta"
import Copyright from "./copyright"
import getConfig from "next/config"

const config = getConfig().publicRuntimeConfig


const Layout = ({ children }) => (
  <Fragment>
    <Meta {...config} />
    <main id="main">{children}</main>
    <Copyright {...config.metadata} />
  </Fragment>
)

export default Layout
