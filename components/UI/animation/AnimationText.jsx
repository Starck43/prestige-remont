import cls from "./AnimationText.module.sass"

const calcAnimation = (durationTime, animationTime, len, unit = 0) => {
    return {
        duration: durationTime + len ** 2 + unit,
        delay: len * (animationTime + len) + unit,
    }
}

export const AnimationText = ({
    Tag = "span",
    children,
    show = false,
    animationTime = 50,
}) => {
    if (show && typeof children === "string") {
        const arr = children.replace(/ /g, "\u00a0").split("")
        const durationTime = arr.length * animationTime

        return (
            <Tag className={cls.text}>
                {arr.map((item, i) => {
                    let { duration, delay } = calcAnimation(
                        durationTime,
                        animationTime,
                        i,
                        "ms"
                    )
                    return (
                        <span
                            key={item + i}
                            className={cls.letter}
                            style={{
                                animationDuration: duration,
                                animationDelay: delay,
                            }}
                        >
                            {item}
                        </span>
                    )
                })}
            </Tag>
        )
    }
    return <Tag>{children}</Tag>
}
