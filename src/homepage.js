/* 
<div id="main-content">
    <h1>LICENSE TO GRILL</h1>
</div>
*/

//content
let homepageContent = document.createElement('div');
homepageContent.setAttribute('class', 'main-content');
homepageContent.setAttribute('id', 'homepage-content');
let restaurantName = document.createElement('h1');
restaurantName.textContent = 'LICENSE TO GRILL';
homepageContent.appendChild(restaurantName)

export default homepageContent



//OPTION 2: EXPORT WHOLE PAGE
// import { navbar, footerDiv } from "./partials";
//let homepageContent = document.createElement('div')
// homepageContent.appendChild(navbar)
// homepageContent.appendChild(homepageContent)
// homepageContent.appendChild(footerDiv)
// export default homepageContent





