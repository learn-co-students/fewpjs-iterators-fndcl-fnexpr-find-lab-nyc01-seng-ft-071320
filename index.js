const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
 let winner = array.find(function(obj) {
   return obj.result === 'W'; 
  })
  if (winner === undefined) {
    return undefined;
  }
  else {
    return winner.year;
  }
}