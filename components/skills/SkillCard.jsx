import React, { memo } from "react"
import Card from "@mui/material/Card"

import Image from "next/image"
import CardContent from "@mui/material/CardContent"
import { FadeSection } from "../UI/animation/FadeSection"

export const SkillCard = memo(({ skill, index, ...others }) => {
    const icon = require(`/public/icons/skills/skill${index + 1}.svg`)

    return (
        <FadeSection
            Tag={Card}
            scale={0.7}
            animationTime={1000}
            animationDelay={1000 * (index + 1) * 0.5}
            className="skill-card"
            variant="outlined"
            square
            sx={{ height: "100%" }}
            {...others}
        >
            <CardContent className="skill-content flex-column center">
                <Image src={icon} alt="" />
                <div className="text">{skill}</div>
            </CardContent>
        </FadeSection>
    )
})
