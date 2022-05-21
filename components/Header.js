import React, { useState } from "react"
import parse from "html-react-parser"
//import Fade from "react-reveal/Fade"
import Image from "next/image"
import { FadeSection } from "./UI/section"

import { srcSet2Obj } from "../core/helpers/utils"
import { AnimationText } from "./AnimationText"

const Header = ({ title, slug, content, featuredImage }) => {
  let image = featuredImage?.node
  let srcSet = srcSet2Obj(image.srcSet)

  const remoteLoader = ({ src, width }) => {
    let curKey = Object.keys(srcSet).find(key => key === width + "w")
    return srcSet[curKey] || src
  }

  //console.log(imageFile)

  return (
    <section id={slug}>
      {image?.sourceUrl && (
        <Image
          loader={remoteLoader}
          src={image.sourceUrl}
          alt={image.altText}
          layout="fill"
          objectFit="cover"
          quality={85}
          placeholder="blur"
          blurDataURL={srcSet["320w"]}
          unoptimized
          className="img-wrapper"
        />
      )}

      <article className="content">
        <div className="main-title">
          <h1>
            <AnimationText>{title}</AnimationText>
          </h1>
        </div>

        {parse(content)}
      </article>
    </section>
  )
}

export default Header
