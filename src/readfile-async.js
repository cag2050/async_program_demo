const fs = require('fs')

var readFile = function (filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) {
                console.log('error')
                console.log(error)
                reject(error)
            }
            resolve(data)
        })
    })
}

var asyncReadFile = async function () {
    // var file1 = await readFile('/etc/networks')
    // var file2 = await readFile('/etc/shells')
    var file1 = await readFile('3.txt')
    var file2 = await readFile('/etc/shells')
    console.log(file1.toString())
    console.log('=======')
    console.log(file2.toString())
}

asyncReadFile()