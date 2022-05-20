import { AnimationText } from "../AnimationText"
import React from "react"

export function Title({ children, className = "title" }) {
  return (
    <h2 className={className}>
      <AnimationText>{children}</AnimationText>
    </h2>
  )
}

export function SubTitle({ children, className = "subtitle" }) {
  return <h4 className={className}>{children}</h4>
}
