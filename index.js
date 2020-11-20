const electron = require('electron')
//const db = require("./db")

const {app, BrowserWindow, ipcMain} = electron
let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        icon: "img/browser.ico",
        darkTheme: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true //Hablitar integração do Node com o Electron
        }
    })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on('sendLink', (event, link) => {
    var wid = widX(link)
    var hei = heiX(link)
    sideWindow = new BrowserWindow({
        width: wid, 
        height: hei,
        icon: "img/browser.ico",
        darkTheme: true,
        autoHideMenuBar: true,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true //Hablitar integração do Node com o Electron
        }});
    sideWindow.loadURL(`${link}`,
    {userAgent: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'});
    console.log(link)
})

function widX (link) {
    if(link == "https://youtube.com/") {
        wid = 550
    } else if (link == "https://www.twitch.tv/") {
        wid = 500
    } else if (link == "https://web.whatsapp.com/") {
        wid = 800
    }else {
        var wid = 800
    }
    return wid;
}

function heiX (link) {
    if(link == "https://youtube.com/") {
        hei = 380
    } else if (link == "https://www.twitch.tv/") {
        hei = 310
    } else if (link == "https://web.whatsapp.com/") {
        hei = 710
    } else {
        var hei = 800
    }
    return hei;
}
