const themeButton = document.getElementById('theme-button')
const body = document.body
const navbar = document.querySelector('#navbar')
const introduction = document.querySelector('#introduction')
const article = document.querySelector('#article')
const footer = document.querySelector('#footer')
let theme = localStorage.getItem('theme') || 'dark'

themeButton.onclick = () => {
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

    setTimeout( () => { 
        introduction.style.display = 'flex'
        article.style.display = 'block'
        footer.style.display = 'block'
        $('.loader-wrapper').fadeOut(500)
    }, 2000)   
}