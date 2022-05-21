import React, { useRef } from "react"
import parse from "html-react-parser"

import Container from "./UI/container"
import { Title } from "./UI/title"
import { FadeSection } from "./UI/section"
import { useFadeEffect } from "../core/hooks"


const Promotion = ({ title, slug, content }) => {
  const observe = useRef()
  const inView = useFadeEffect(observe)
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
