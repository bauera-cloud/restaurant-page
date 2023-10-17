function changeMainContent(link) {
    let mainContent = document.querySelector('.main-content');
    if (link.target.id === 'about') {
        mainContent.replaceWith(aboutContent)
    } else if (link.target.id === 'home') {
        mainContent.replaceWith(homepageContent)
    } else if (link.id === 'menu') {
        // mainContent.replaceWith(menuContent)
    }
}


export { changeMainContent }