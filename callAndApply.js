// @ts-nocheck

// Call:

function greeting() {
  console.log(`Hi, my name is ${this.name}, I am ${this.age}`)
}

const user1 = {
  name: 'YOLO',
  age: '300'
}

greeting.call(user1)
// call() sẽ truyền đối tượng là tham số đầu tiên:
// call(this, param1, param2, param3)
// với bind chúng ta phải dùng () gọi hàm 1 lần nữa: func.bind(object)(), còn với call chúng ta gọi hàm thực thi trực tiếp luôn

// Apply:

// apply(this, [param1, param2, param3,...])

function sum() {
  const nummer = Array.from(arguments)
  return nummer.reduce((sum, num) => sum + num, 0)
}

function average() {
  //sum
  const x = sum.apply(null, arguments)

  // result = sum/argument.length
  return x / arguments.length
}

console.log(average(1, 2, 3, 4, 5))
