import Icon from './github-mark-white.png';

//navbar
let navbar = document.createElement('nav');
let navbarList = document.createElement('ul');
let home = document.createElement('li')
let menu = document.createElement('li')
let about = document.createElement('li')
let homeLink = document.createElement('a')
let menuLink = document.createElement('a')
let aboutLink = document.createElement('a')
homeLink.setAttribute('id', 'home')
menuLink.setAttribute('id', 'menu')
aboutLink.setAttribute('id', 'about')
homeLink.textContent = 'HOME';
menuLink.textContent = 'MENU';
aboutLink.textContent = 'ABOUT';
navbar.appendChild(navbarList)
navbarList.appendChild(home)
navbarList.appendChild(menu)
navbarList.appendChild(about)
home.appendChild(homeLink)
menu.appendChild(menuLink)
about.append(aboutLink);

//footer
let footer = document.createElement('footer');
let copyrightDiv = document.createElement('div')
let githubLink = document.createElement('a');
let githubIcon = document.createElement('img');
copyrightDiv.textContent = 'Copyright \u00A9 2023 bauera-cloud'
githubLink.setAttribute('href', 'https://github.com/bauera-cloud')
githubIcon.setAttribute('src', Icon)
githubIcon.setAttribute('id', 'githubImg');
githubIcon.setAttribute('alt', 'github-mark')
footer.appendChild(copyrightDiv)
footer.appendChild(githubLink)
githubLink.appendChild(githubIcon)

export { navbar, footer }