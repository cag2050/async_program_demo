/**
 * Created by cag on 9/18/17.
 */
const fs = require('fs')

var readFile = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (error, data) => {
            if(error) reject(error)
            resolve(data)
        })
    })
}

var generator = function* () {
    // var file1 = yield readFile('/etc/fstab')
    var file2 = yield readFile('/etc/shells')
    // console.log(file1.toString())
    console.log(file2.toString())
}

var gen = generator();

gen.next().value.then(data => {
    gen.next(data).value.then(data => {
        gen.next(data)
    })
})