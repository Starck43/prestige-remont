import React from "react"
import parse from "html-react-parser"
import { Title } from "./UI/title"
import Container from "./UI/container"
import { srcSet2Obj } from "../core/helpers/utils"
import Image from "next/image"
import { FadeSection } from "./UI/section"
import {useInView} from "react-cool-inview"
//import Fade from "react-reveal/Fade"

const About = ({ title, slug, content, featuredImage }) => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
    rootMargin: "-100px 0px",
  })
  let image = featuredImage?.node
  let srcSet = srcSet2Obj(image?.srcSet)

  const remoteLoader = ({ src, width }) => {
    let curKey = Object.keys(srcSet).find(key => key === width + "w")
    return srcSet[curKey] || src
  }

  return (
    <FadeSection ref={observe} inView={inView} id={slug}>
      <Container>
        <article className="content flex-wrap">
          {inView && <Title>{title}</Title>}
          {parse(content)}
          <div className="img-wrapper">
            {image?.sourceUrl && (
              <Image
                loader={remoteLoader}
                src={image.sourceUrl}
                alt={image.altText}
                layout="intrinsic"
                width={image.mediaDetails.width}
                height={image.mediaDetails.height}
                quality={85}
                placeholder="blur"
                blurDataURL={srcSet["320w"]}
                unoptimized
              />
            )}
          </div>
        </article>
      </Container>
    </FadeSection>
  )
}

export default About
