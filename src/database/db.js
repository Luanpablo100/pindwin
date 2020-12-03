const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('src/database/configs.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ 
    sites: [
        {
            "name": "Twitch",
            "link": "https://www.twitch.tv",
            "image": "https://www.flaticon.com/svg/static/icons/svg/2111/2111668.svg"
        },
        {
            "name": "WhatsApp",
            "link": "https://web.whatsapp.com",
            "image": "https://www.flaticon.com/svg/static/icons/svg/220/220236.svg"
        },
        {
            "name": "Github",
            "link": "htpps://github.com",
            "image": "../img/githublogo.png"
        },
        {
            "name": "Youtube",
            "link": "htpps://youtube.com",
            "image": "https://www.flaticon.com/svg/static/icons/svg/1384/1384060.svg"
        },
        {
            "name": "Spotify",
            "link": "spotify.html",
            "image": "https://www.flaticon.com/svg/static/icons/svg/2111/2111624.svg"
        },
        {
            "name": "Adicionar",
            "link": "#",
            "image": "https://www.flaticon.com/svg/static/icons/svg/1828/1828817.svg"
        }
    ]}).write()

// Add a post
// db.get('sites')
//   .push({ id: 1, title: 'lowdb is awesome'})
//   .write()

// Set a user using Lodash shorthand syntax
// db.set('user.name', 'typicode')
//   .write()
  
// Increment count
// db.update('count', n => n + 1)
//   .write()

function addFav() {

}

function removeFav() {

}