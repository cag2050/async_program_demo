const fs = require('fs')

// 如果未指定字符编码，则返回原始的 buffer。
fs.readFile('1.txt', 'utf8', (error, data) => {
    console.log('error===:', error)
    if(error) throw error
    console.log('data===:\n', data)
})

// 上面代码中，readFile 函数的第二个参数，就是回调函数，也就是任务的第二段。等到操作系统返回了 /etc/passwd 这个文件以后，回调函数才会执行。
// 一个有趣的问题是，为什么 Node.js 约定，回调函数的第一个参数，必须是错误对象err（如果没有错误，该参数就是 null）？原因是执行分成两段，在这两段之间抛出的错误，程序无法捕捉，只能当作参数，传入第二段。