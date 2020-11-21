const electron = require('electron')
const {app, BrowserWindow, ipcMain} = electron

app.on('ready', () => {
    const mainWindow = new BrowserWindow ({
        autoHideMenuBar: true,
        icon: 'assets/img/pindwin.svg',
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadFile('assets/pages/index.html')
})

ipcMain.on('sendLink', (event, link) => {
    var wid = widX(link)
    var hei = heiX(link)
    sideWindow = new BrowserWindow({
        width: wid, 
        height: hei,
        autoHideMenuBar: true,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true //Hablitar integração do Node com o Electron
        }});
    sideWindow.loadURL(
            `${link}`,
            {userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'}
        );
    sideWindow.on('closed', () => {
        win = null
    });
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