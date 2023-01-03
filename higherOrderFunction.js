// HOF là một hàm nhận một hàm khác làm tham số (callback) hoặc trả về một hàm khác (map, reduce, ...)

// Ex:

function waitAndRun(ms, func) {
  setTimeout(func, ms)
}

function run() {
  console.log('Running after 2s...')
}

waitAndRun(2000, run)
