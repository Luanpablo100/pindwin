import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
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

    export default db