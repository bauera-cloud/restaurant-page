import { navbar, footer } from "./partials.js";
import homepageContent from "./homepage.js";
import aboutContent from "./about.js";
import './style.css';

let contentDiv = document.createElement("div");
contentDiv.setAttribute('id', 'content');


contentDiv.appendChild(navbar)
contentDiv.appendChild(aboutContent)
contentDiv.appendChild(footer)

document.body.appendChild(contentDiv)

// contentDiv.appendChild(homepageContent)

// let navbarLinks = document.querySelector('nav>ul');
// // navbarLinks.addEventListener('click', userClicksNavLink)

// console.log(homepageContent)

// //get first child of content
// function userClicksNavLink(e) {
//     let link = e.target.id;
//     // if (link === 'about') {
//     //     contentDiv.removeChild(contentDiv.lastChild)
//     //     contentDiv.appendChild(aboutContent)
//     // } else if (link === 'home') {
//     //     contentDiv.removeChild(contentDiv.lastChild)
//     //     contentDiv.appendChild(homepageContent)
//     // }
// }