import React, { Fragment } from "react"
import { useRouter } from "next/router"
//import { createBrowserHistory } from "history"
import Link from "next/link"
import NavLogo from "./NavLogo"
import { Nav } from "react-bootstrap"

const Navbar = ({ nav }) => {
  const router = useRouter()

  return (
    <Fragment>
      <nav id="navbar">
        <div className="navbar-wrapper">
          <NavLogo pathname={router.pathname} />

          <div className="navbar-items">
            {nav.map((node) => (
              <Fragment key={node.databaseId}>
                {
                  router.pathname === "/" ? (
                  <Nav.Link href={"/#"+node.path.replace(/^\/|\/$/g,'')}>{node.label}</Nav.Link>
                ) : (
                  <Link href={node.path} passHref>
                    <Nav.Link disabled={node.path === router.pathname}>
                      {node.label}
                    </Nav.Link>
                  </Link>
                )
                }
              </Fragment>
            ))}
          </div>
        </div>
      </nav>
    </Fragment>
  )
}


export default Navbar
