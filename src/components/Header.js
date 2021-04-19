import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Fade from "react-reveal/Fade"
import ContactModal from "./ContactForm"
import { Button } from 'react-bootstrap'

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"
import backgroundImg from "../images/container-img-1.jpg"


const Header = () => {
  const [modalShow, setModalShow] = React.useState(false)

  const query = useStaticQuery(graphql`
    {
      wpPage(slug: {eq: "index"}) {
        content
        id
        title
      }
    }
  `)
  return (
    <section id="home" className="flex-centered" style={{'backgroundImage': 'url('+backgroundImg+')'}}>
      <div className="header-wrapper">

        <Fade>
          <div className="heading-wrapper">
            <h1>{query.wpPage.title}</h1>
          </div>
        </Fade>

        <Fade>
          {parse(query.wpPage.content)}
        </Fade>

        <Fade>
          <Button className="main-button" onClick={() => setModalShow(true)}>
            Написать нам
          </Button>
        </Fade>

        <ContactModal show={modalShow} onHide={() => setModalShow(false)} />

      </div>
    </section>
  )
}

export default Header
