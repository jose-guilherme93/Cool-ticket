// const fetch = require('node-fetch')

let users = [
    {account: 'youtube', name:'jose-guilherme93'},
    {account: 'instagram', name:'jose_guilherme93'},
    {account: 'facebook', name:'jose-guilherme2015'},
    {account: 'twitter', name:'jose-guilherme93'},
]


function getUSerByGithub() {
    let url = "https://api.github.com/users/jose-guilherme93"

    fetch(url)
        .then(response => response.json())
        .then(dataApi => {
        description.textContent = dataApi.bio
        
    })
    
}
getUSerByGithub()

