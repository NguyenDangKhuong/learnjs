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

// Ex1:
const add = (a, b) => a + b
const add2 = a => b => a + b

console.log(add(1, 2))
console.log(add2(1)(2))

// Ex2:

const person1 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'yolo' }
]

const person2 = [
  { id: 3, name: 'Ahaha' },
  { id: 4, name: 'Ahihi' }
]

// thay vì
// const ids = person1.map(item => item['id'])
// const names = person1.map(item => item['name'])
// thì ta có thể dùng currying để dùng lại hàm get

// hãy

const get = property => item => item[property]

const getIds = get('id')
const getNames = get('name')

const ids = person1.map(getIds)
const names = person1.map(getNames)
console.log(ids, names)

// Ex3:

// thay vì
// function priceDiscount(price, discount) {
//   return price - price * discount
// }

// console.log(priceDiscount(500, 0.1))
// console.log(priceDiscount(500, 0.2))

// hãy

function priceDiscountCurrying(discount) {
  return price => {
    return price - price * discount
  }
}

const tenPercentDiscount = priceDiscountCurrying(0.1)
const twentyPercentDiscount = priceDiscountCurrying(0.2)

console.log(tenPercentDiscount(500))
console.log(twentyPercentDiscount(500))
