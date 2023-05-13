import { useRef } from "react"
import parse from "html-react-parser"
import Image from "next/image"

import { Container } from "/components/UI/Container"
import { FadeSection } from "/components/UI/animation/FadeSection"
import { AnimationText } from "/components/UI/animation/AnimationText"
import { useInViewport } from "/core/hooks/useInViewport"
import { srcSet2Array } from "/core/helpers/utils"

export const About = ({ title, slug, content, featuredImage }) => {
    const observer = useRef()
    const inView = useInViewport({ trigger: observer })

    let image = featuredImage?.node
    let srcSet = srcSet2Array(image?.srcSet)

    /*    const remoteLoader = ({ src, width }) => {
		let curKey = Object.keys(srcSet).find(key => key === width + "w")
		return srcSet[curKey] || src
	}*/

    return (
        <FadeSection id={slug} ref={observer} inView={inView} animationTime={700} translate={[0, "20vh"]}>
            <Container>
                <article className="content">
                    <AnimationText Tag="h2" show={inView}>
                        {title}
                    </AnimationText>
                    <div className="text">{parse(content)}</div>

                    <div className="img-wrapper">
                        {image?.sourceUrl && (
                            <Image
                                //loader={remoteLoader}
                                src={image.sourceUrl}
                                srcSet={srcSet?.[0]}
                                alt={image.altText}
                                //layout="intrinsic"
                                width={image.mediaDetails.width}
                                height={image.mediaDetails.height}
                                //quality={85}
                                placeholder="blur"
                                blurDataURL={srcSet?.[0] || image.sourceUrl}
                                unoptimized
                            />
                        )}
                    </div>
                </article>
            </Container>
        </FadeSection>
    )
}
