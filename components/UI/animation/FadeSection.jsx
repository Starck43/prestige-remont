import { forwardRef } from "react"

export const FadeSection = forwardRef((props, ref) => {
    const {
        Tag = "section",
        id,
        inView = false,
        animationTime = 500,
        animationDelay = 0,
        translate = [0, 0],
        scale = 1,
        bezier = "cubic-bezier(.03, .72, .93, 1)",
        children,
        className,
        ...others
    } = props

    return (
        <Tag
            ref={ref}
            id={id}
            className={`${className} ${inView ? "visible" : ""}`}
            style={{
                transition: `
                opacity ${animationTime * 1.2}ms ${animationDelay}ms ease-out, 
                transform ${animationTime}ms ${animationDelay}ms ${bezier}`,
                transform: inView
                    ? "none"
                    : `translate(${translate[0]}, ${translate[1]}) scale(${scale})`,
                opacity: +inView,
                //display: inView ? "flex" : "block",
            }}
            {...others}
        >
            {children}
        </Tag>
    )
})
