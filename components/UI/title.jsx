import { AnimationText } from "./animation/AnimationText"

export const Title = ({ children, Tag = "h2", className = "title" }) => (
    <Tag className={className}>{children}</Tag>
)

export const SubTitle = ({ children, Tag = "h5", className = "subtitle" }) => (
    <Tag className={className}>{children}</Tag>
)
