function superbowlWin(record) {
  let result = record.find(function (s) { return s.result === 'W' })
  return !!result ? result.year : undefined

}