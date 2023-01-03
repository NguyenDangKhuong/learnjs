const findNumber = num => func => {
  const result = []
  for (let i = 0; i < num; i++) {
    if (func(i)) {
      result.push(i)
    }
  }
  return result
}
findNumber(10)(number => number % 2 === 1)
findNumber(20)(number => number % 2 === 0)
findNumber(30)(number => number % 3 === 2)
