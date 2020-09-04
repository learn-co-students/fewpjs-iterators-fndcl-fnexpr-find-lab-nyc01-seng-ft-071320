const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  let champions = record.find(record => record.result === "W");
  return champions ? champions.year : undefined;
}