import { navbar, footer } from "./partials.js";
import homepageContent from "./homepage.js";
import aboutContent from "./about.js";
import { changeMainContent } from "./usefulFunctions.js";
import './style.css';

//load initial html with the homepage
let contentDiv = document.createElement("div");
contentDiv.setAttribute('id', 'content');
contentDiv.appendChild(navbar)
contentDiv.appendChild(homepageContent)
contentDiv.appendChild(footer)
document.body.appendChild(contentDiv)

//logic for making the pages
let navNodes = document.querySelectorAll('#navbar>ul>li>a');
navNodes.forEach((link) => {
    link.addEventListener('click', changeMainContent)
})
