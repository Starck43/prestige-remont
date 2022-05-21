import React, {useRef} from "react"
import Card from "./Card"
import { FadeSection } from "./UI/section"
import { Title } from "./UI/title"
import Container from "./UI/container"
import {useFadeEffect} from "../core/hooks"


const Portfolio = ({ title, slug, projects }) => {
  const observe = useRef()
  const inView = useFadeEffect(observe)
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
