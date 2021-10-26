

// let users = 
//     {
//     github:'jose-guilherme93',
//     instagram:'jose_guilherme93',
//     youtube:'jose-guilherme93',
//     facebook:'jose-guilherme2015',
// }    




let button = document.getElementById('button')

let inputText = document.getElementById('inputText')


button.onclick = ev => {
    ev.preventDefault()
    if (inputText.value) {
        inputText.value
    }
    console.log(inputText.value)
    // inputText.value = ''
    
}


const inputText = 'jose-guilherme93'
const getUserByGithub = async () => {
    
const response = await fetch(`https://api.github.com/users/${inputText}`)
const dataApi = await response.json()
    .then(dataApi => {
    description.textContent = dataApi.bio
    userImage.src = dataApi.avatar_url
    
})
}
getUserByGithub()
