// @ts-nocheck
//object literal
var mouse = {
  name: 'yolo',
  getName: function () {
    return this.name
  }
}

//constructor function (viết hoa chữ cái đầu)
function Mouse(color) {
  this.type = 'mouse'
  this.color = color
}

var mouse1 = new Mouse('white')
console.log(mouse1)
// Mouse { type:  'mouse', color: 'white' }
var mouse2 = { type: 'mouse' }
console.log(mouse2)
// { type:  'mouse' }

//Ứng dụng: tạo nhiều con chuột cho Tom ăn

var Tom = {
  name: 'Tom',
  stomach: [],
  eat: function (mouse) {
    // @ts-ignore
    this.stomach.push(mouse)
    return this
  }
}

function Mouse(name) {
  this.name = name
}

var m1 = new Mouse('m1')
var m2 = new Mouse('m2')
var m3 = new Mouse('m3')
Tom.eat(m1).eat(m2).eat(m3)

console.log(Tom)
