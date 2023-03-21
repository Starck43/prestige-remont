import { useRef } from "react"
import parse from "html-react-parser"
import Image from "next/legacy/image"

import { Container } from "/components/UI/Container"
import { FadeSection } from "/components/UI/animation/FadeSection"
import { AnimationText } from "/components/UI/animation/AnimationText"
import { useInViewport } from "/core/hooks/useInViewport"
import { srcSet2Obj } from "/core/helpers/utils"
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
                    {
                        <AnimationText Tag="h2" show={inView}>
                            {title}
                        </AnimationText>
                    }
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
