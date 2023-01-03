// @ts-nocheck
// 1.method overriding: ghi đè lại một method
class Mouse {
  say() {
    console.log('my name is Chuột')
  }
}

class Jerry extends Mouse {
  say(callback) {
    console.log('my name is Chuột Jerry')
    callback()
  }
}

const jerry = new Jerry()
jerry.say(function () {
  console.log('call the Tom')
})
// my name is Chuột Jerry

// 2.super:
// khởi tạo class
class Cat {
  constructor(name, color, mouse) {
    this.name = name
    this.color = color
    this.mouse = mouse
  }

  getMouse(mouse) {
    this.mouse = mouse
  }
}

const tom = new Cat('Tom', 'gray', '')
tom.getMouse('jerry')
console.log(tom)

// kế thừa class dùng super

class MachineCat extends Cat {
  constructor(name, color, mouse, battery) {
    super(name, color, mouse)
    this.battery = battery
  }

  getMouse(mouse, battery) {
    super.getMouse(mouse)
    this.battery = battery
  }
}

const doraemon = new MachineCat('Doraemon', 'blue', '')
doraemon.getMouse('nobita', '20%')
console.log(doraemon)
