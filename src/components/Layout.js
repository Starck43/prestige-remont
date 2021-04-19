/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"

import "../styles/main.scss"

const Layout = ({ children, className }) => {
	const [offsetClass, setOffsetClass] = useState('nav-transparent')

	useEffect(() => {
		let offset = 50
		window.onscroll = (e) => {
			//console.log(e)
			if (window.innerWidth < 576) {
				if (window.pageYOffset > offset && offsetClass === 'nav-transparent' ) setOffsetClass('')
				if (window.pageYOffset <= offset && offsetClass !== 'nav-transparent' ) setOffsetClass('nav-transparent')
			} else {
				if (offsetClass === 'nav-transparent' ) setOffsetClass('')
			}
		}
	})
	return (
		<div className={className}>
			<nav id="navbar" className={offsetClass}><Navbar pageClass={className}/></nav>
			<main id="content">{children}</main>
		</div>
	)
}
export default Layout
