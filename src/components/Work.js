import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Card from "./Card"
import Fade from "react-reveal/Fade"


const Work = () => {
  const query = useStaticQuery(graphql`
    query WP_Posts {
      allWpPost {
        edges {
          post: node {
            id
            title
            slug
            excerpt
            uri
            featuredImage {
              node {
                id
                sourceUrl
              }
            }
          }
        }
      }
    }
  `)
    return (
      <section id="work">
        <div className="container">
          <Fade bottom cascade>
            <h1>наши работы</h1>
          </Fade>

          <Fade>
            <div className="grid">
              {query.allWpPost.edges.map(({ post }, index) =>
                <Card
                  key={index}
                  heading={post.title}
                  paragraph={post.excerpt}
                  imgUrl={post.featuredImage.node.sourceUrl}
                  projectLink={post.slug}
                />
              )}
            </div>
          </Fade>
        </div>
      </section>
    )
}

export default Work


