// @ts-nocheck
class Foo {
  static staticMethod() {
    console.log('staticMethod can called direct ahihi')
  }

  method() {
    console.log('method ahaha')
  }
}

// static method chỉ gọi đc từ class
Foo.staticMethod()
// staticMethod can called direct ahihi

Foo.method()
// Err: Foo.method is not a function

// phải tạo ra instance trước mới gọi được
const foo = new Foo()
// instance là một object đc tạo ra từ một class (foo là instance của class Foo)

foo.method()
// method ahaha

foo.staticMethod()

// class là cách viết ngắn của function:
class Bar {
  static staticMethod() {
    console.log('staticMethod can called direct ahihi')
  }

  method() {
    console.log('method ahaha')
  }
}

// ===

function Bar() {}
Bar.prototype.method = function () {
  console.log('method ahaha')
}

Bar.staticMethod = function () {
  console.log('staticMethod can called direct ahihi')
}
