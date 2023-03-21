import { forwardRef, memo } from "react"
import { classnames } from "/core/helpers/utils"

import cls from "./Input.module.sass"

export const Input = forwardRef((props, ref) => {
    const {
        type = "text",
        value = "",
        rounded = false,
        readonly = false,
        required = false,
        placeholder = "",
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
            required={required}
            placeholder={required ? "Поле должно быть заполнено!" : placeholder}
            onChange={onChangeHandler}
            className={classnames(
                cls,
                ["input__text", "input"],
                { rounded, readonly, required },
                [className]
            )}
            {...other}
        />
    )
})

export const TextArea = memo(props => {
    const {
        value = "",
        rounded = false,
        readonly = false,
        required = false,
        placeholder = "",
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
            required={required}
            placeholder={required ? "Поле должно быть заполнено!" : placeholder}
            onChange={onChangeHandler}
            className={classnames(
                cls,
                ["input__textarea", "input"],
                { rounded, readonly, required },
                [className]
            )}
            {...other}
        />
    )
})
