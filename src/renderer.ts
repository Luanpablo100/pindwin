// This file is required by the index.html file and will
// be executed in the renderer process for that window.
const electron = require('electron')
const { ipcRenderer } = electron

let favorites = Object

function start() {
    console.log('App is starting')
    getData()
}

async function getData() {
    const data = await fetch('../../src/database/configs.json')
    favorites = await data.json()
    console.log(favorites)
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
    getLinks()
}

function getLinks() {
    let elementsLink = document.getElementsByClassName("link");
    for (let i = 0; i < (elementsLink.length - 1); i++) {
        elementsLink[i].addEventListener('click', (event) => {
            event.preventDefault()
            let link = (<HTMLLinkElement>event.target).href
            switch(link) {
                case 'https://www.twitch.tv/':
                    alert("Após encontrar a live desejada, coloque-a em modo teatro!")
                    break
                // case `file://${path.resolve(__dirname, 'spotify.html')}`:
                //     alert('Este recurso ainda não está disponível! A seguir, verá apenas uma representação.')
                //     break
                default:
                    break
            }
            ipcRenderer.send('sendLink', link)
            }
        )
    }
    let exitAdd = document.getElementsByClassName("exitAdd");
    var c;
    for (c = 0; c < exitAdd.length; c++) {
    exitAdd[c].addEventListener('click', (event) => {
        event.preventDefault()
        document.getElementById('addModal').classList.toggle('desactive')
        document.getElementById('addModal').classList.toggle('active')
    })}
    //
}

start()

