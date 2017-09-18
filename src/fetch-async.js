const fetch = require('node-fetch')

let fetchData = async function() {
    let url = 'https://api.github.com/users/github'
    let response = await fetch(url)
    let result = await response.json()
    console.log(result)
}

fetchData()