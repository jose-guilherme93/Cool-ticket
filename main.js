

let users = 
    {
    github:'jose-guilherme93',
    instagram:'jose_guilherme93',
    youtube:'jose-guilherme93',
    facebook:'jose-guilherme2015',
}    



function getUSerByGithub() {
    
let url = `https://api.github.com/users/${users.github}`
    fetch(url)
        .then(response => response.json())
        .then(dataApi => {
        description.textContent = dataApi.bio
        userImage.src = dataApi.avatar_url
    })
    
}
getUSerByGithub()

