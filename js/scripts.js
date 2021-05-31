// Selected color theme will stay saved for 1 hour, other times it will be decided by time of day.

var hours = 1; // to clear the localStorage after 1 hour
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if (setupTime == null) {
    localStorage.setItem('setupTime', now)
} else {
    if(now-setupTime > hours*60*60*1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', now);
    }
}

const themeButton = document.getElementById('theme-button')
const body = document.body
const navbar = document.querySelector('#navbar')
const introduction = document.querySelector('#introduction')
const article = document.querySelector('#article')
const footer = document.querySelector('#footer')

let date = new Date()
let dateTheme = 'dark'
if(date.getHours() > 6 && date.getHours() < 18) {
    dateTheme = 'light'
}
let theme = localStorage.getItem('theme') || dateTheme

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