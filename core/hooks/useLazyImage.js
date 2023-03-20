import { useEffect, useState } from "react"

export const useLazyImage = src => {
  const [sourceLoaded, setSourceLoaded] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSourceLoaded(img.src)
  }, [src])

  return sourceLoaded
}
