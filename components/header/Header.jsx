import { memo, useCallback, useMemo, useRef, useState } from "react"
import Image from "next/image"
import parse from "html-react-parser"

import { FadeSection } from "/components/UI/animation/FadeSection"
import { srcSet2Obj } from "/core/helpers/utils"

export const Header = memo(({ title, slug, content, featuredImage }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const headerRef = useRef()

    const image = featuredImage?.node
    const srcSet = useMemo(() => srcSet2Obj(image.srcSet), [image.srcSet])

    const remoteLoader = useCallback(
        ({ src, width }) => {
            let curKey = Object.keys(srcSet).find(key => key === width + "w")
            return srcSet[curKey] || src
        },
        [srcSet]
    )

    return (
        <section ref={headerRef} id={slug}>
            {image?.sourceUrl && (
                <Image
                    loader={remoteLoader}
                    src={imageLoaded ? image.sourceUrl : srcSet?.["320w"]}
                    srcSet={image.srcSet}
                    //layout="fill"
                    //objectFit="cover"
                    width={image.mediaDetails.width}
                    height={image.mediaDetails.height}
                    // unoptimized
                    alt={image.altText}
                    className="img-wrapper"
                    placeholder="blur"
                    blurDataURL={srcSet["320w"]}
                    onLoadingComplete={() => setImageLoaded(true)}
                />
            )}

            <div className="content">
                <FadeSection
                    Tag="h1"
                    className="main-title"
                    inView={imageLoaded}
                    animationTime={700}
                    animationDelay={1000}
                    translate={[0, "-200%"]}
                    bezier="cubic-bezier(.05, .28, .47, 1.1)"
                    scale={2}
                >
                    {title}
                </FadeSection>
                <FadeSection
                    Tag="div"
                    className="flex-column center"
                    inView={imageLoaded}
                    animationTime={900}
                    animationDelay={2000}
                >
                    {parse(content)}
                </FadeSection>
            </div>
        </section>
    )
})
