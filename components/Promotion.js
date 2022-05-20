import React from "react"
import parse from "html-react-parser"
import { useInView } from "react-cool-inview"

import Container from "./UI/container"
import { Title } from "./UI/title"
import { FadeSection } from "./UI/section"

const Promotion = ({ title, slug, content }) => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
    rootMargin: "-100px 0px",
  })

  return (
    <FadeSection ref={observe} inView={inView} id={slug}>
      <Container>
        {inView && <Title>{title}</Title>}

        {parse(content)}
      </Container>
    </FadeSection>
  )
}

export default Promotion
