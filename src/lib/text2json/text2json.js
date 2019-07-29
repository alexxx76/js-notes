const text2arr = text => {
  let out = { "/": [] }

  let arr = text.split('\n').filter(item => {
    item = item.trim()
    return item
  })

  arr.forEach((item, index) => {
    item = item.trim()
    let firstPart = item.split('/')[0]
    let lastPart = item.replace(/^\//, '')

    if (firstPart === '') out["/"].push({ "id": index + 1, "text": lastPart })
    else {
      if (out[firstPart]) out[firstPart].push({ "id": index + 1, "text": lastPart })
      else {
        out[firstPart] = []
        out[firstPart].push({ "id": index + 1, "text": lastPart })
      }
    }
  })

  return out
}

export default text2arr