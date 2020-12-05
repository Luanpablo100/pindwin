const electron = require('electron')
const {ipcRenderer} = electron
const path = require('path')

let divLinks = null
let favorites = []
let elementsLink = null
let exitAdd = null
let addForm = null

function start() {
    divLinks = document.querySelector('#links')
    getData()
}

async function getData() {
    let data = await fetch('../../src/database/configs.json')
    favorites = await data.json()
    renderFavorites()
    getLinks()
}

function renderFavorites() {
    let favoritesHTML = ''
    favorites.sites.forEach(fav => {
        const { name, link, image } = fav
        const favoriteHTML = `
        <div class='opt'>
            <img src="${image}" alt="${name}" width="50">
            <a class="link" href="${link}">${name}</a>
        </div>
        `
    favoritesHTML += favoriteHTML
    })
    favoritesHTML += ''
    divLinks.innerHTML = favoritesHTML
    addFav()
}

// Link

function getLinks() {
    elementsLink = document.getElementsByClassName("link");
    let i;
    for (i = 0; i < (elementsLink.length - 1); i++) {
        elementsLink[i].addEventListener('click', (event) => {
            event.preventDefault()
            var link = event.target.href
            switch(link) {
                case 'https://www.twitch.tv/':
                    alert("Após encontrar a live desejada, coloque-a em modo teatro!")
                    break
                case `file://${path.resolve(__dirname, 'spotify.html')}`:
                    alert('Este recurso ainda não está disponível! A seguir, verá apenas uma representação.')
                    break
                default:
                    break
            }
            ipcRenderer.send('sendLink', link)
            }
        )
    }
    exitAdd = document.getElementsByClassName("exitAdd");
    var c;
    for (c = 0; c < exitAdd.length; c++) {
    exitAdd[c].addEventListener('click', (event) => {
        event.preventDefault()
        document.getElementById('addModal').classList.toggle('desactive')
        document.getElementById('addModal').classList.toggle('active')
    })}

    document.getElementById('search').addEventListener('submit', (event) => {
        event.preventDefault()
        let searchtext = document.getElementById('search-bar').value
        ipcRenderer.send('sendLink', searchtext)
    })

    document.getElementById('addBtn').addEventListener('click', (event) => {
        event.preventDefault()
    })
}

function addFav() {
    addForm = document.querySelector('form')
    addForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let name = document.querySelector('#linkname').value
        let name = document.querySelector('#linkurl').value
        let name = document.querySelector('#linkimage').value
        ipcRenderer.send('addLink', {name, link, image})
    })
}

start()
