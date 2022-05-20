import { useEffect, useState } from "react"

export const useFadeEffect = ref => {
  const [isVisible, setVisible] = useState(true)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {

      if (entries[0].intersectionRatio > 0.0) {
        setVisible(true)
        ref && observer.unobserve(ref.current)
      }
      else {
        setVisible(false)
      }
    })

    ref && observer.observe(ref.current)

    return () => observer.unobserve(ref?.current)
  }, [])

  return isVisible
}


export const useLazyLoadImage = src => {
  const [sourceLoaded, setSourceLoaded] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSourceLoaded(img.src)
  }, [src])

  return sourceLoaded
}

