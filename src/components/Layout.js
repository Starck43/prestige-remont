/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import { createBrowserHistory } from "history"
import Navbar from "../../components/Navbar"

import "../styles/main.scss"



const history = typeof window !== "undefined" ? createBrowserHistory() : null


const Layout = ({ children, className }) => {
	const [offsetClass, setOffsetClass] = useState("nav-transparent")
	const [bgOpacity, setBgOpacity] = useState(0)

  const goBack = () => {
    if (history) {
      history.goBack()
    } else {
      window.location.href = "/"
    }
  }

	useEffect(() => {
		if (className === 'main-container') {
			let offset = 100
			let opacityLvl = 0.7
			window.onscroll = e => {
				//console.log(e)
				if (window.pageYOffset > offset && bgOpacity < opacityLvl) {
					setBgOpacity(opacityLvl)
				} else if (window.pageYOffset <= offset) {
					var opacity = opacityLvl/offset*window.pageYOffset
					setBgOpacity(opacity)
				}

				if (window.pageYOffset > offset && offsetClass === "nav-transparent")
					setOffsetClass("")
				if (window.pageYOffset <= offset && offsetClass !== "nav-transparent")
					setOffsetClass("nav-transparent")

			}
		}
	})

	return (
		<div className={className}>
			<nav id="navbar" style={{backgroundColor: bgOpacity > 0 ? `rgba(255,255,255,${bgOpacity})` : ""}} className={offsetClass}>
				<Navbar pageClass={className} />
			</nav>
      {className === 'portfolio-container' ? (<button className="btn btn-back btn-default" onClick={goBack}>Назад</button>) : ''}
			<main id="content">{children}</main>
		</div>
	)
}
export default Layout
