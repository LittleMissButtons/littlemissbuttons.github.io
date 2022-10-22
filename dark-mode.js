const themeSwitch = document.getElementById('theme-switch');
let isLightTheme = true;

themeSwitch.addEventListener('click', () => {
document.body.className = isLightTheme ? "dark-mode" : "";
themeSwitch.innerHTML = isLightTheme ? "Light Mode" : "Dark Mode";

isLightTheme = !isLightTheme;
}); 
