var user = {
  name: 'yolo',
  sayHi: function () {
    console.log('my name is ' + this.name)
  }
}
user.sayHi()
// my name is yolo

//----------------------------------------------------------------

// khi gọi user.sayHi() thì method sayHi context là user => ok

// nhưng gọi theo cách này:
// const say = user.sayHi
// thì biến say đc gán là một function user.sayHi nhưng context của say đã thành global context nên nó ko tìm ra đc propertise name của context user nữa => ta phải bind user (bind giúp ta có thể dùng các propertise của object bằng this)

const say = user.sayHi.bind(user)
say()
