// import getConfig from 'next/config'

export const isSafari = () => {
  var userAgent = navigator.userAgent.toLowerCase()
  return /^((?!chrome|android).)*safari/i.test(userAgent)
}

export const getWindowDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    ratio: window.innerWidth / window.innerHeight,
  }
}

export const getYear = () => {
  return new Date().getFullYear()
}

export const srcSet2Obj = str => {
  if (!str) return null

  let srcArray = str.split(",")
  return srcArray.reduce((obj, cur) => {
    let arr = cur.trim().split(" ")
    return {
      ...obj,
      [arr[1]]: arr[0],
    }
  }, {})
}

export const array2Obj = array => {
  return array.reduce((obj, cur) => {
    return {
      ...obj,
      [cur.slug]: cur,
    }
  }, {})
}

export const absoluteUrl = url => {
  if (url && url.indexOf("http", 0) === -1) return process.env.SERVER + url
  return url
}

export const truncateHTML = (value, n = 200) => {
  let t = value.substring(0, n) // first cut
  let tr = t.replace(/<(.*?[^\/])>.*?<\/\1>|<.*?\/>/, "") // remove opened+closed tags
  // capture open tags
  let ar = tr.match(
    /<((?!li|hr|img|br|area|base|col|command|embed|input|keygen|link|meta|head|param|source|track|wbr).*?)>/g
  )

  if (ar) return t + "&hellip;" + ar.reverse().join("").replace(/</g, "</") // close tags
  return value
}
