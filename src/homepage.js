/* 
    <div id="content">
        <nav>
            <ul>
                <li><a href="" id="home">HOME</a></li>
                <li><a href="" id="menu">MENU</a></li>
                <li><a href="" id="about">ABOUT</a></li>
            </ul>
        </nav>
        <div id="main-content">
            <h1>LICENSE TO GRILL</h1>
        </div>
        <footer>
            <div>Copyright &copy 2023 bauera-cloud </div>
            <a href="https://github.com/bauera-cloud"><img id="githubImg" src="../src/github-mark-white.png"
                    alt="github-mark"></a>
        </footer>
    </div>
*/
let contentDiv = document.querySelector("#content");

//navbar
let navDiv = document.createElement('nav');
let navList = document.createElement('ul');
let home = document.createElement('li')
let menu = document.createElement('li')
let about = document.createElement('li')
let homeLink = document.createElement('a')
let menuLink = document.createElement('a')
let aboutLink = document.createElement('a')
homeLink.setAttribute('id', 'home')
menuLink.setAttribute('id', 'menu')
aboutLink.setAttribute('id', 'about')
contentDiv.appendChild(navDiv)
navDiv.appendChild(navList)
navList.appendChild(home)
navList.appendChild(menu)
navList.appendChild(about)
home.appendChild(homeLink)
menu.appendChild(childLink)
about.append(aboutLink);

//content
let mainContentDiv = document.createElement('div')
mainContentDiv.setAttribute('id', 'main-content')
let restaurantName = document.createElement('h1')
restaurantName.textContent = 'LICENSE TO GRILL';
contentDiv.appendChild(mainContentDiv)
mainContentDiv.appendChild(restaurantName)

//footer
let footerDiv = document.createElement('footer');
let copyrightDiv = document.createElement('div')
let githubLink = document.createElement('a');
let githubMark = document.createElement('img');
copyrightDiv.textContent = 'Copyright &copy 2023 bauera-cloud'
githubLink.setAttribute('href', 'https://github.com/bauera-cloud')
githubMark.setAttribute('id', 'githubImg');
githubMark.setAttribute('src', '../src/github-mark-white.png')
githubMark.setAttribute('alt', 'github-mark')
footerDiv.appendChild(copyrightDiv)
footerDiv.appendChild(githubLink)
githubLink.appendChild(githubMark)





