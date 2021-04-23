import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Fade from "react-reveal/Fade"

const About = () => {
  const query = useStaticQuery(graphql`
    {
      wpPage(slug: { eq: "about-us" }) {
        content
        id
        title
        featuredImage {
          node {
            srcSet
            sourceUrl
          }
        }
      }
    }
  `)
  return (
    <section id="about">
      <div className="container">
        <Fade bottom cascade>
          <h1>{query.wpPage.title}</h1>
        </Fade>

        <Fade>
          <div className="content">
            <div className="text">{parse(query.wpPage.content)}</div>

            <div className="image-wrapper">
              <img
                src={query.wpPage.featuredImage.node.sourceUrl}
                srcSet={query.wpPage.featuredImage.node.srcSet}
                alt="о нас"
              ></img>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default About
