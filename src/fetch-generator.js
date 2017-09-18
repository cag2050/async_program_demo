/**
 * Created by cag on 9/18/17.
 */
const fetch = require('node-fetch')

function* gen() {
    var url = 'https://api.github.com/users/github'
    let result = yield fetch(url)
    console.log(result)
}

var g = gen()
var next = g.next()

next.value
    .then(response => {
        return response.json()
    })
    .then(data => {
        g.next(data)
    })