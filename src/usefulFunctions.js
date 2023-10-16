function changeMainContent() {
    let mainContent = document.querySelector('.main-content');
    if (link.id === 'about') {
        mainContent.replaceWith(aboutContent)
    } else if (link.id === 'home') {
        mainContent.replaceWith(homepageContent)
    } else if (link.id === 'menu') {
        mainContent.replaceWith(homepageContent)
    }
}

export { changeMainContent }