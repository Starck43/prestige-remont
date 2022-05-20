import { forwardRef } from "react"

export const FadeSection = forwardRef(
  ({ children, inView = false, id, className = "" }, ref) => {
    //const domRef = useRef()
    //const inView = useFadeEffect(ref)

   // console.log(inView)
    return (
      <section
        ref={ref}
        id={id}
        className={`fade-section ${inView ? "in-view" : ""} ${className}`}
      >
        {children}
      </section>
    )
  }
)
