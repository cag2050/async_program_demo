const fs = require('fs')

var readFile = function (filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (error, data) => {
            if(error) reject(error)
            resolve(data)
        })
    })
}

var generator = function* () {
    var file1 = yield readFile('/etc/networks')
    var file2 = yield readFile('/etc/shells')
    console.log(file1.toString())
    console.log('=======')
    console.log(file2.toString())
}

var gen = generator();

gen.next().value.then(data => {
    // console.log('data1===')
    // console.log(data)
    gen.next(data).value.then(data => {
        // console.log('data2===')
        // console.log(data)
        gen.next(data)
    })
})