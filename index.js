const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array){
  let result = array.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}
