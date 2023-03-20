import { forwardRef, memo } from "react"
import { classnames } from "/core/helpers/utils"

import cls from "./Input.module.sass"

export const Input = forwardRef((props, ref) => {
    const {
        type = "text",
        value = "",
        rounded = false,
        readonly = false,
        onChange,
        className,
        ...other
    } = props

    const onChangeHandler = e => {
        onChange?.(e.target.value, e.target.name)
    }

    return (
        <input
            ref={ref}
            type={type}
            value={value}
            readOnly={readonly}
            {...other}
            onChange={onChangeHandler}
            className={classnames(
                cls,
                ["input__text", "input"],
                { rounded, readonly },
                [className]
            )}
        />
    )
})

export const TextArea = memo(props => {
    const {
        value = "",
        rounded = false,
        readonly = false,
        onChange,
        className,
        ...other
    } = props

    const onChangeHandler = e => {
        onChange?.(e.target.value)
    }
    return (
        <textarea
            value={value}
            onChange={onChangeHandler}
            {...other}
            className={classnames(
                cls,
                ["input__textarea", "input"],
                { rounded, readonly },
                [className]
            )}
        />
    )
})
