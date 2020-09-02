const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (input) =>{
    let result = input.find(item => item["result"] === "W")
    if (result) {return result.year}
    else 
      return undefined
  }