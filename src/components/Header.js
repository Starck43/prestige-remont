import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Fade from "react-reveal/Fade"
import ContactModal from "./ContactForm"
import { Button } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import { StaticImage } from "gatsby-plugin-image"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false)

  const query = useStaticQuery(graphql`
    {
      wpPage(slug: { eq: "index" }) {
        content
        id
        title
        featuredImage {
          node {
            id
            sourceUrl
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  formats: [AUTO, WEBP]
                  placeholder: BLURRED
                  breakpoints: [320, 576, 1024, 1400]
                )
              }
            }
          }
        }
      }
    }
  `)

  const headerImg = getImage(query.wpPage.featuredImage.node.localFile)
  return (
    <section
      id="home"
      className="flex-centered"
    >
      {headerImg && (
        <GatsbyImage className="header-img-wrapper"
          image={headerImg}
          alt=""
        />
      )}

      <div className="header-wrapper">
        <Fade>
          <div className="heading-wrapper">
            <h1>{query.wpPage.title}</h1>
          </div>
        </Fade>

        <Fade>{parse(query.wpPage.content)}</Fade>

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
