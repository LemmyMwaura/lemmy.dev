const getUpdatedCount = (num:number) : string | number =>  {
  if (num < 999) return num

  let newNum = num.toString().split('')[0]
  return `${newNum}k`
}

const modifyDate = (date: Date): string => {
  return new Date(date).toLocaleDateString()
}

export { getUpdatedCount, modifyDate }
