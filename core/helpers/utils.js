export const classnames = (
    cls = null,
    classes = [],
    dict = {},
    additional = []
) => {
    if (!cls) return [...additional.filter(Boolean)].join(" ")

    return [
        ...classes
            .filter(Boolean)
            .map(classname => (classname ? cls[classname] : null)),
        ...Object.entries(dict)
            .filter(([_, value]) => Boolean(value))
            .map(([classname, _]) => (classname ? cls[classname] : null)),
        ...additional.filter(Boolean),
    ].join(" ")
}

export const getWindowDimensions = () => {
    if (typeof window === "undefined") {
        return {
            width: 0,
            height: 0,
            ratio: 0,
        }
    }

    return {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.innerWidth / window.innerHeight,
    }
}

export const getYear = () => {
    return new Date().getFullYear()
}

export const srcSet2Array = str => {
    if (!str) return null

    const obj = str.split(",").reduce((acc, cur) => {
        let arr = cur.trim().split(" ")
        return {
            ...acc,
            [arr[1]]: arr[0],
        }
    }, {})

    const arr = []
    Object.keys(obj)
        .sort()
        .forEach(key => {
            arr.push(obj[key])
        })

    return arr
}

export const array2Obj = array => {
    return array.reduce((acc, cur) => {
        return {
            ...acc,
            [cur.slug]: cur,
        }
    }, {})
}

export const createSrcSet = srcset =>
    srcset.reduce((acc, value, index) => {
        let arr = value.match(/(?!_)\d+w/g)
        if (!arr) return acc
        return (
            acc +
            value +
            " " +
            arr.pop() +
            (index < srcset.length - 1 ? ", " : "")
        )
    }, "")
