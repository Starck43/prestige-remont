import React, { useRef } from "react"
import parse from "html-react-parser"
import Grid from "@mui/material/Grid"
import { FadeSection } from "/components/UI/animation/FadeSection"
import { Title } from "/components/UI/title"
import { Container } from "/components/UI/Container"

import { useInViewport } from "/core/hooks/useInViewport"
import { SkillCard } from "./SkillCard"

export const Skills = ({ title, content }) => {
    const observer = useRef()
    const inView = useInViewport({ trigger: observer })

    return (
        <FadeSection
            id={"skills"}
            ref={observer}
            inView={inView}
            animationTime={700}
            translate={[0, "20vh"]}
        >
            <Container className="flex-column">
                {inView && <Title>{title}</Title>}
                <Grid container spacing={{ mobile: 2, tablet: 4 }}>
                    {[...parse(content, { trim: true })].map((item, i) => (
                        <Grid item mobile={12} tablet={6} desktop={4} key={i}>
                            <SkillCard skill={item} index={i} inView={inView} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </FadeSection>
    )
}
