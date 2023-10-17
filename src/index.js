import { navbar, footer } from "./partials.js";
import homepageContent from "./homepage.js";
import aboutContent from "./about.js";
import menuContent from "./menu.js";
// import { changeMainContent } from "./usefulFunctions.js";
import './style.css';

//load initial html with the homepage
let contentDiv = document.createElement("div");
contentDiv.setAttribute('id', 'content');
contentDiv.appendChild(navbar)
contentDiv.appendChild(homepageContent)
contentDiv.appendChild(footer)
document.body.appendChild(contentDiv)

function changeMainContent(link) {
    let mainContent = document.querySelector('.main-content');
    if (link.target.id === 'about') {
        mainContent.replaceWith(aboutContent)
    } else if (link.target.id === 'home') {
        mainContent.replaceWith(homepageContent)
    } else if (link.target.id === 'menu') {
        mainContent.replaceWith(menuContent)
    }
}

//logic for making the pages
let navNodes = document.querySelectorAll('#navbar>ul>li>a');
navNodes.forEach((link) => {
    link.addEventListener('click', changeMainContent)
})
