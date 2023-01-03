// @ts-nocheck
// destructuring là phá vỡ cấu trúc (!== srtruturing)

//array
const arr = [1, 2, 3, 4, 5]

const [a, ...b] = arr

console.log(a, b)

// object

const obj = {
  c: 1,
  d: 2,
  e: 3
}

const { c, d, e } = obj
console.log(c, d, e)
