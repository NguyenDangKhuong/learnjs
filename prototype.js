// @ts-nocheck
// prototype là object đc chia sẽ cho tất cả các object tạo ra bởi từ khóa new

function Mouse (color,  weight) {
  this.type = 'mouse';
  this.color = color;
  this.weight = weight;
  // this.sleep = function () {
  //   console.log('Sleeping...')
  // }

}
// nếu tạo method theo constuctor func thì khi khởi tạo object bằng new 
// => sẽ khởi tạo hai method khác nhau gây tốn bộ nhớ
// console.log(jerry.sleep === mickey.sleep) => false (2 method nay đc khởi tạo khác nhau)

Mouse.prototype.sleep = function () {
  console.log('Sleeping...')
}
// dùng prototype khởi tạo method thì sẽ tiết kiệm bộ nhớ hơn, 
// sleep đc khai báo một lần và lưu trong bộ nhớ
// console.log(jerry.sleep === mickey.sleep) => true (method sleep đc chia sẽ giữa jerry và mickey)

const jerry = new Mouse('yellow', 20)
const mickey = new Mouse('white', 100)


