// @ts-nocheck

// Function Declaration:
function handleClickDeclaration() {
  console.log('clicked')
}

// Function Expression:
const handleClickExpression = function () {
  console.log('clicked')
}

// function anonymous
const handleClickAnonymous = () => {
  console.log('clicked')
}

// Function Declaration có thuộc tính hoisting còn Function Expression thì không
// Đoạn code dưới đây sẽ thực thi bình thường khi Function Declaration
handleStuffDeclaration()

function handleStuffDeclaration() {
  // do stuff
}

// Đối với Function Expression thì sẽ báo lỗi

// handleStuffExpression()
// Err: Block-scoped variable 'handleStuffExpression' used before its declaration.

const handleStuffExpression = function () {
  // do stuff
}

// => function expression bị giới hạn vùng sử dụng, giúp global scope nhẹ và sạch hơn.
// arrow Function Expression không có biến this
