// Selected color theme will stay saved for 1 hour, other times it will be decided by time of day.

var hours = 1; // to clear the localStorage after 1 hour
var now = new Date().getTime();
var setupTime = localStorage.getItem("setupTime");
if (setupTime == null) {
  localStorage.setItem("setupTime", now);
} else {
  if (now - setupTime > hours * 60 * 60 * 1000) {
    localStorage.clear();
    localStorage.setItem("setupTime", now);
  }
}

const themeButton = document.querySelector("#theme-button");
const themeIcon = document.querySelector("#theme-icon");
const themeText = document.querySelector("#theme-text");
const body = document.body;
const navbar = document.querySelector("#navbar");
const introduction = document.querySelector("#introduction");
const article = document.querySelector("#article");
const footer = document.querySelector("#footer");
const signatureWrapper = document.querySelector("#signature-wrapper");

let date = new Date();
let dateTheme = "dark";
if (date.getHours() > 6 && date.getHours() < 18) {
  dateTheme = "light";
}
let theme = localStorage.getItem("theme") || dateTheme;

themeButton.onclick = () => {
  if (theme == "dark") {
    localStorage.setItem("theme", "light");
    body.classList.replace("dark", "light");
    themeIcon.classList = "fas fa-moon";
    theme = "light";
    themeText.innerHTML = "Enable light mode";
  } else {
    localStorage.setItem("theme", "dark");
    body.classList.replace("light", "dark");
    themeIcon.classList = "fas fa-sun";
    theme = "dark";
    themeText.innerHTML = "Enable dark mode";
  }
};

function signature() {
  return new Promise((resolve) => {
    setTimeout(() => {
      introduction.style.display = "flex";
      article.style.display = "block";
      footer.style.display = "block";
      resolve();
    }, 2000);
  });
}

body.onload = async () => {
  body.classList.add(theme);
  if (theme == "dark") {
    themeIcon.classList = "fas fa-sun";
    themeText.innerHTML = "Enable light mode";
  } else {
    themeIcon.classList = "fas fa-moon";
    themeText.innerHTML = "Enable dark mode";
  }

  await signature();
  signatureWrapper.style.opacity = "0";
  signatureWrapper.style.zIndex = "0";
  signatureWrapper.style.transition = "1s";
};
