import { useCallback, useEffect, useState } from "react"

export const useInViewport = props => {
    const [visible, setVisible] = useState(false)

    const {
        trigger,
        container,
        steps = 1,
        threshold = 0,
        once = true,
        callback,
    } = props

    const getThresholds = useCallback(() => {
        if (steps <= 1) return threshold

        const thresholds = []

        for (let i = 1.0; i <= steps; i++) {
            const ratio = i / steps
            thresholds.push(ratio)
        }
        return thresholds
    }, [steps, threshold])

    useEffect(() => {
        if (
            !"IntersectionObserver" in window ||
            !"IntersectionObserverEntry" in window ||
            !"intersectionRatio" in window.IntersectionObserverEntry.prototype
        ) {
            setVisible(true)
        } else {
            let ref = trigger?.current

            if (ref && ((!visible && once) || !once || callback)) {
                const options = {
                    root: container?.current,
                    rootMargin: "0px",
                    threshold: getThresholds(),
                }

                let observer = new IntersectionObserver(entry => {
                    if (entry[0].isIntersecting) {
                        setVisible(true)
                        callback?.()
                    } else {
                        if (!once) setVisible(false)
                    }
                }, options)

                observer.observe(ref)

                return () => observer.unobserve(ref)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [callback, trigger, container, getThresholds, once])

    return visible
}
