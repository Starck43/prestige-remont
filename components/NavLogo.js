import React from "react"
import Link from "next/link"

import { Navbar } from "react-bootstrap"

const NavLogo = ({ href = "/", pathname = "/" }) => {
  let url = pathname === "/" ? "#" : href
  let navBrand = (
    <Navbar.Brand href={url}>
      <div id="logo">
        <div className="line-1">
          <span className="part-1">п</span>
          <span className="part-2">р</span>
          <span className="part-3">естиж</span>
        </div>
        <div className="line-2">
          емонт<span className="part-1"></span>
        </div>
      </div>
    </Navbar.Brand>
  )

  return pathname !== "/" ? <Link href={url}>{navBrand}</Link> : <>{navBrand}</>
}

export default NavLogo
