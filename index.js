const testVar = {}

function testFunc() {
  return "hi"
}

// superbowlWin = (array) => {
//   let result = array.filter(function (e) {
//     e.result === "W"
//   })
//   return !!result ? result.year : underfined
// }

superbowlWin = (record) => {
  let result = record.find(record => record.result === "W")
  return !!result ? result.year : undefined
}