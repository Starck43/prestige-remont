import { forwardRef } from "react"

import { classnames } from "/core/helpers/utils"

import cls from "./Loader.module.sass"

export const Loader = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={classnames(cls, ["container"])}>
            <div className={cls.balls}>
                <span className={classnames(cls, ["ball", "one"])} />
                <span className={classnames(cls, ["ball", "two"])} />
                <span className={classnames(cls, ["ball", "three"])} />
                <span className={classnames(cls, ["ball", "four"])} />
            </div>
        </div>
    )
})
