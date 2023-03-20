import React from "react"

export default function IconSVG({ name, color, size, className }) {
    return (
        <svg
            className={`icon icon-${name} ${className}`}
            fill={color}
            stroke={color}
            width={size}
            height={size}
        >
            <use xlinkHref={`#icon-${name}`} />
        </svg>
    )
}
