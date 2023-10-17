import Menu from './menu-items.json5';
import { LoremIpsum } from "lorem-ipsum";

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

let menuContent = document.createElement('div');
menuContent.setAttribute('class', 'main-content');
menuContent.setAttribute('id', 'menu-page');
let restaurantName = document.createElement('h1');
restaurantName.textContent = 'LICENSE TO GRILL';
let titleHorizontalLine = document.createElement('hr');
titleHorizontalLine.setAttribute('id', 'title-horizontal-line');

let menuItems = [];
for (let item of Menu.items) {
    let menuItem = document.createElement('div');
    menuItem.setAttribute('class', 'menu-item');
    let menuItemName = document.createElement('h3');
    menuItemName.setAttribute('class', 'menu-item-name')
    menuItemName.textContent = item.name;
    let menuItemDescription = document.createElement('p');
    menuItemDescription.setAttribute('class', 'menu-item-description')
    menuItemDescription.textContent = lorem.generateSentences(2);
    let menuItemPrice = document.createElement('h3');
    menuItemPrice.setAttribute('class', 'menu-item-price')
    menuItemPrice.textContent = `${item.price}$`
    let menuItemBorder = document.createElement('hr');
    menuItemBorder.setAttribute('class', 'menu-item-border')
    menuItem.appendChild(menuItemName)
    menuItem.appendChild(menuItemDescription)
    menuItem.appendChild(menuItemPrice)
    menuItem.appendChild(menuItemBorder)
    menuItems.push(menuItem)
}

menuContent.appendChild(restaurantName)
menuContent.appendChild(titleHorizontalLine)
menuItems.forEach((item) => menuContent.appendChild(item))


export default menuContent