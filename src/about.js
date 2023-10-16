{/* <div class="main-content" id="about-page">
<h1>LICENSE TO GRILL</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit explicabo, aliquid non quas,
    amet quisquam dolor maxime fuga similique adipisci distinctio! Aperiam iure adipisci itaque quam.
    Dolores, corrupti distinctio?
    Veniam cum repudiandae provident distinctio quos, qui nam tenetur ipsa dicta nulla asperiores eum
    ipsum possimus expedita! Aliquid debitis laborum delectus maiores! Omnis, cumque? Expedita ipsam
    itaque ab magnam unde?</p>
</div> */}

import { LoremIpsum } from "lorem-ipsum";
import { navbar, footer } from "./partials";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

let aboutContent = document.createElement('div');
aboutContent.setAttribute('id', 'about-page')
aboutContent.setAttribute('class', 'main-content')

let restaurantName = document.createElement('h1')
restaurantName.textContent = 'LICENSE TO GRILL'
let aboutParagraph = document.createElement('p');
aboutParagraph.textContent = lorem.generateSentences(5);
aboutContent.appendChild(restaurantName)
aboutContent.appendChild(aboutParagraph)


export default aboutContent 