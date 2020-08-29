const superbowlWin = (records) => {
  const foundRecord = records.find(record => record.result === "W")
  return foundRecord? foundRecord.year : undefined
}
