import { Fragment } from "react"
import Seo from "./seo"
import Copyright from "./copyright"
import DATA from "~/core/constants"


const Layout = ({ children }) => (
  <Fragment>
    <Seo {...DATA} />
    <main id="main">{children}</main>
    <Copyright {...DATA} />
  </Fragment>
)

export default Layout
