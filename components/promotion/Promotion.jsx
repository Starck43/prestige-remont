import React, { memo, useRef } from "react"
import parse from "html-react-parser"

import { Container } from "/components/UI/Container"
import { AnimationText } from "/components/UI/animation/AnimationText"
import { FadeSection } from "/components/UI/animation/FadeSection"
import { useInViewport } from "/core/hooks/useInViewport"

export const Promotion = memo(({ title, slug, content }) => {
    const observer = useRef()
    const inView = useInViewport({ trigger: observer })

    return (
        <FadeSection
            id={slug}
            ref={observer}
            inView={inView}
            animationTime={700}
            translate={[0, "20vh"]}
        >
            <Container className="flex-column">
                {
                    <AnimationText Tag="h2" show={inView}>
                        {title}
                    </AnimationText>
                }
                {parse(content)}
            </Container>
        </FadeSection>
    )
})
