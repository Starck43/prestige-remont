import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Link } from "gatsby"

const Navbar = ({pageClass}) => {

  const getParentByTag = (elem, lookingFor) => {
    lookingFor = lookingFor.toUpperCase();
    if (elem.tagName === lookingFor) return elem

    while (elem = elem.parentNode) {
      if (elem.tagName === lookingFor) return elem
    }
    return null
  }

  const handleClick = (e) => {
    if (pageClass === 'main-container') {

      var link = getParentByTag(e.target,'a')
      if (link && link.hash) {
        e.preventDefault()
        scrollTo(link.hash)
      }

    }
  }

  return (
    <div className="container">
      <div className="navbar-wrapper">

        <Link to="/#home" onClick={handleClick}>
          <div id="logo">
            <div className="line-1"><span className="part-1">п</span><span className="part-2">р</span><span className="part-3">естиж</span></div>
            <div className="line-2">емонт<span className="part-1">43</span></div>
          </div>
        </Link>

        <div className="links-wrapper">
          <Link to="/#work" onClick={handleClick}>
            Работы
          </Link>
          <Link to="/#about" onClick={handleClick}>
            О нас
          </Link>
          <Link to="/#contact" onClick={handleClick}>
            Контакты
          </Link>
        </div>

      </div>
    </div>
  )


}

export default Navbar

