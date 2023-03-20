import React, { memo, useRef } from "react"
import parse from "html-react-parser"

import { useInViewport } from "/core/hooks/useInViewport"
import { Container } from "../UI/Container"
import { Title } from "../UI/title"
import { FadeSection } from "../UI/animation/FadeSection"

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
                {inView && <Title>{title}</Title>}
                {parse(content)}
            </Container>
        </FadeSection>
    )
})
