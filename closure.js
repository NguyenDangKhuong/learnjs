function debug(name) {
  return function (str) {
    console.log(`[${name}]: ${str}`)
  }
}

const log = debug('404')
// gán debug('404') = log, mà debug trả về hàm anonymous nên log chính là hàm anonymous

log('page not found')
// khi log thực thi thì nó gọi hàm anonymous
