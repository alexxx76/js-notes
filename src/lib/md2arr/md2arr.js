const findH = string => {
  let result = string.match(/^#+/)
  if (result) {
    let size = result[0].length <= 6 ? result[0].length : 6
    let name = `h${size}`
    return { [name]: string.substr(size + 1) }
  }
  return false
}

const findHR = string => {
  let result = string.match(/^---+/)
  if (result) {
    return { "hr": "" }
  }
  return false
}

const findBR = string => {
  if (string === '') return { "br": "" }
  return false
}

const findPRE = string => {
  let result = string.match(/^[ x][ x][ x][ x]+/)
  if (result) {
    return { "pre": string.substr(4) }
  }
  return false
}


const md2arr = text => {
  let out = []

  if (typeof text === 'string' && text.length > 0) {
    let arr = text.split('\n')

    arr.forEach(item => {
      let matches = [
        findH(item),
        findHR(item),
        findBR(item),
        findPRE(item),
        { "p": item }
      ].filter(result => result !== false)[0]

      if (out.length > 0) {
        if (matches.hasOwnProperty("pre") && out[out.length - 1].hasOwnProperty("pre")) {
          out[out.length - 1].pre += '\n' + matches.pre
        } else if (matches.hasOwnProperty("p") && out[out.length - 1].hasOwnProperty("p")) {
          out[out.length - 1].p += '\n' + matches.p
        }
        else out.push(matches)
      }
      else out.push(matches)
    })
  }

  return out
}


export default md2arr