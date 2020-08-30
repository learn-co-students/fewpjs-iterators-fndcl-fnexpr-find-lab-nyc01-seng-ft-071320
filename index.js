const superbowlWin = (array) => {
  let result = array.find(object => object.result === "W")
  if (result) {
    return result.year
  } else {
    return undefined
  }
}