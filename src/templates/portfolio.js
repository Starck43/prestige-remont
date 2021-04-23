import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
//import { Carousel } from "react-bootstrap"
import Carousel from "react-img-carousel"

import Layout from "../components/Layout"

import "../styles/slider.scss"
//require('react-img-carousel/lib/carousel.css')

const BlogPostTemplate = ({ data: { post } }) => {

  var images = []
  const options = {
    replace: domNode => {
      if (domNode.name === "img") {
        images.push(domNode.attribs)
      }
    },
  }

  parse(post.content, options)
  //console.log(images)

  return (
    <Layout className="portfolio-container">

      <Carousel
        height="100%"
        slideWidth="100%"
        viewportHeight="100%"
        lazyLoad={true}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            srcSet={img.srcset}
            width={img.width}
            height={img.height}
            sizes={img.sizes}
            loading={img.loading}
            title={img.alt}
            alt={img.alt}
          />
        ))}
      </Carousel>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      content
      title
    }
  }
`
