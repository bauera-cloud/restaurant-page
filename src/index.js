import { navbar, footer } from "./partials.js";
import homepageContent from "./homepage.js";
import aboutContent from "./about.js";
import './style.css';

let contentDiv = document.createElement("div");
contentDiv.setAttribute('id', 'content');

contentDiv.appendChild(navbar)
contentDiv.appendChild(homepageContent)
contentDiv.appendChild(footer)

document.body.appendChild(contentDiv)

//make the logic for changing pages
let navNodes = document.querySelectorAll('#navbar>ul>li>a');

navNodes.forEach((link) => {
    link.addEventListener('click', (e) => {
        let mainContent = document.querySelector('.main-content');
        if (link.id === 'about') {
            mainContent.replaceWith(aboutContent)
        } else if (link.id === 'home') {
            mainContent.replaceWith(homepageContent)
        }
    })
})
