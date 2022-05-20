import React from "react"
import Card from "./Card"
import { FadeSection } from "./UI/section"
import { Title } from "./UI/title"
import Container from "./UI/container"
import { useInView } from "react-cool-inview"

//import Fade from "react-reveal/Fade"

const Portfolio = ({ title, slug, projects }) => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
    rootMargin: "-100px 0px",
  })

  return (
    <FadeSection ref={observe} inView={inView} id={slug}>
      <Container>
        {inView && <Title>{title}</Title>}

        <div className="grid">
          {projects.map(({ post }) => (
            <Card key={post.id} {...post} />
          ))}
        </div>
      </Container>
    </FadeSection>
  )
}

export default Portfolio
