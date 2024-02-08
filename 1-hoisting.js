// nên khai báo biến ở đầu hàm hoặc đầu file để tráng tình trạng hoisting
console.log(z)
// ReferenceError: x is not defined
// => báo lỗi khi biến dùng mà chưa khai báo

//---------------------------------------------------------

let a
console.log(a)
// undefined
// => thông báo biến chưa được khai báo

//---------------------------------------------------------

var b
console.log(b)
var b = 5;
console.log(b)
// undefined
// 5
// => js đưa biến lên đầu file hoặc hàm chứ không gán biến

//---------------------------------------------------------

var x = 5
function run() {
    console.log(x)
}
run()
// 5
// => scope con dùng chung với cha

//---------------------------------------------------------

var x = 5
function run() {
    console.log(x)

    var x = 10
    // undefined
    // biến được đưa lên đầu hàm mà không khai báo
}
run()

//---------------------------------------------------------

var x = 5
function run() {
    var x = 10
    console.log(x)

    // 10
    // khai báo biến trong hàm nên scope con dùng của con
}
run()

