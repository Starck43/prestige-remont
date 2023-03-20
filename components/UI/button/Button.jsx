import { memo } from "react"
import { classnames } from "/core/helpers/utils"

import cls from "./Button.module.sass"

export const Button = memo(({ children, className = "", ...props }) => {
    return (
        <button
            {...props}
            className={classnames(cls, ["btn"], {}, [className])}
        >
            {children}
        </button>
    )
})
