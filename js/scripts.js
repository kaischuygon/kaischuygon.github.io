const themeButton = document.getElementById('theme-button')
const body = document.body
const navbar = document.querySelector('#navbar');
let theme = localStorage.getItem('theme') || 'dark'

themeButton.onclick = () => {
    console.log('activated')
    if(theme == 'dark') {
        localStorage.setItem('theme', 'light')
        body.classList.replace('dark', 'light')
        themeButton.innerHTML = '<i class="fas fa-moon"></i>'
        theme = 'light'
    } else {
        localStorage.setItem('theme', 'dark')
        body.classList.replace('light', 'dark')
        themeButton.innerHTML = '<i class="fas fa-sun"></i>'
        theme = 'dark'
    }
}

body.onload = () => {
    body.classList.add(theme)
    if(theme == 'dark') {
        themeButton.innerHTML = '<i class="fas fa-sun"></i>'
    } else {
        themeButton.innerHTML = '<i class="fas fa-moon"></i>'
    }
}
