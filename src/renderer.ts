// This file is required by the index.html file and will
// be executed in the renderer process for that window.

let favorites = Object

function start() {
    console.log('App is starting')
    getData()
}

async function getData() {
    const data = await fetch('../../src/database/configs.json')
    favorites = await data.json()
    console.log(favorites)
    getLinks()
}

function getLinks() {
    let divLinks = document.getElementById('links')
    renderFavorites(divLinks)
}

function renderFavorites(divLinks:HTMLElement) {
    let favoritesHTML = '' as const
    (<any>favorites).sites.forEach((fav: Object) => {
        const { name, link, image } = (<any>fav)
        const favoriteHTML = `
        <div class='opt'>
            <img src="${image}" alt="${name}" width="50">
            <a class="link" href="${link}">${name}</a>
        </div>
        `
    favoritesHTML += favoriteHTML
    })
    divLinks.innerHTML = favoritesHTML
}

start()
