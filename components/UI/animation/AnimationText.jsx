import cls from "./AnimationText.module.sass"

export const AnimationText = ({ children, animationTime = 50 }) => {
    if (typeof children === "string") {
        const arr = children.replace(/ /g, "\u00a0").split("")
        const duration = arr.length * animationTime

        return (
            <span className={cls.text}>
                {arr.map((item, i) => (
                    <span
                        key={item + i}
                        className={cls.letter}
                        style={{
                            animationDuration: `${duration + i ** 2}ms`,
                            animationDelay: `${animationTime * i + i ** 2}ms`,
                        }}
                    >
                        {item}
                    </span>
                ))}
            </span>
        )
    }
    return children
}
