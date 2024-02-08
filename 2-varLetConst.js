// 1. Khai báo biến
var a = 1
let b = 2
const c = 3
console.log(a, b, c) // 1 2 3

//---------------------------------------------------------

var a = 2
// let b = 3
// const c = 4
// let và const khai báo lại báo lỗi re-declare, var không bị

//----------------------------------------------------------------

var x
let y
// const z
// var và let khai báo không cần gán biến, const phải gán biến

//----------------------------------------------------------------

// let và const không có hoisting => khuyến khích sử dụng 

//----------------------------------------------------------------

// let và const có blockscope (block: {}), var thì không có

if (true) {
    let x = 1
}
console.log(x)
// x is not defined

//---------------------------------------------------------


for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}
// 5
// 5
// 5
// 5
// 5
// => setTimeout chạy 5 lần trong vòng lặp sau 1 giây. Sau thời gian delay, chúng thực thi các chức năng bên trong, chỉ cần console.log(i). Khi 1 giây trôi qua, vòng lặp đã kết thúc và i trở thành 5. Năm số 5 được in ra.

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}

// Vì biến let bị ràng buộc với block scope, vì vậy giá trị của i được nắm bắt. trong trường hợp var, nó là phạm vi toàn cục / phạm vi nơi hàm được gọi. vì vậy khi hàm thực sự thực thi, giá trị var i là giá trị đứng cuối cùng, điều này không đúng với let.

// Bởi vì hàng đợi sự kiện trong JavaScript, hàm callback setTimeout() được gọi sau khi vòng lặp được thực thi.

// Và do biến i trong vòng lặp đầu tiên được khai báo bằng từ khóa var, nên giá trị này là toàn cục.

// Trong vòng lặp, chúng ta đã tăng giá trị của i lên 1 lần, bằng cách sử dụng toán tử ++. Vào thời điểm hàm callback setTimeout() được gọi, i đã có giá trị bằng 5 ở trong vòng lặp for đầu tiên.

// Trong vòng lặp for thứ hai, biến i được khai báo bằng từ khóa let: Biến được khai báo với từ khóa let (và const) có phạm vi dạng block hay còn gọi là block-scoped (Phạm vi trong dấu ngoặc { }).

// Trong mỗi lần lặp, ta sẽ có một giá trị mới và mỗi giá trị nằm trong phạm vi của vòng lặp.

for (var i = 0; i < 5; i++) {
    setTimeout((function (index) {
        return function () {
            console.log(i)
        }
    }(i)), 1000)
}

// clousure sẽ ghi nhớ giá trị i hiện tại để in ra giá trị dưới dạng index





