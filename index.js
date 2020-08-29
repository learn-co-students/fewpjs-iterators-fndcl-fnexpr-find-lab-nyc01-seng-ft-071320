const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array_objects) => {
  let winningYear = array_objects.find(function(object){return object.result === "W"})
  if (winningYear) {
    return winningYear.year
  } else {
    return undefined
  }
}
