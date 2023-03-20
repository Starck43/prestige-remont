import React, { useRef } from "react"
import parse from "html-react-parser"
import Image from "next/legacy/image"
import { srcSet2Obj } from "../../core/helpers/utils"
import { useInViewport } from "../../core/hooks/useInViewport"
import { Title } from "../UI/title"
import { Container } from "../UI/Container"
import { FadeSection } from "../UI/animation/FadeSection"
//import Fade from "react-reveal/Fade"

export const About = ({ title, slug, content, featuredImage }) => {
    const observer = useRef()
    const inView = useInViewport({ trigger: observer })

    let image = featuredImage?.node
    let srcSet = srcSet2Obj(image?.srcSet)

    const remoteLoader = ({ src, width }) => {
        let curKey = Object.keys(srcSet).find(key => key === width + "w")
        return srcSet[curKey] || src
    }

    return (
        <FadeSection
            id={slug}
            ref={observer}
            inView={inView}
            animationTime={700}
            translate={[0, "20vh"]}
        >
            <Container>
                <article className="content">
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
