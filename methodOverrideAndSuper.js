// @ts-nocheck
// method overriding: ghi đè lại một method
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

//super: 


