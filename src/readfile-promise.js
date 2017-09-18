const readFile = require('fs-readfile-promise')
console.log(readFile.toString())

readFile('/etc/shells')
    .then(data => {
        console.log(data.toString())
    })
    .then(() => {
        return readFile('/etc/networks', 'utf8')
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })