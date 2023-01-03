// @ts-nocheck
// rest: gom lại

function rest(a, ...numbers) {
  console.log(a)
  console.log(numbers)
}
rest(1, 2, 3, 4)

// spread: trải ra

const a = [1, 2]
const b = [0, ...a, 3]
console.log(b)
