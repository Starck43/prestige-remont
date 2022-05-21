import { forwardRef } from "react"

export const FadeSection = forwardRef(
  ({ children, inView = false, id, className = "" }, ref) => {

    return (
      <section
        ref={ref}
        id={id}
        className={className+` fade-section${inView ? " in-view" : ""}`}
      >
        {children}
      </section>
    )
  }
)
