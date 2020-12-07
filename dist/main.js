"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
function createWindow() {
    // Create the browser window.
    var mainWindow = new electron_1.BrowserWindow({
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, "preload.js")
        }
    });
    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, "../assets/pages/index.html"));
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", function () {
    createWindow();
    electron_1.app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
electron_1.ipcMain.on('sendLink', function (event, link) {
    var wid = widX(link);
    var hei = heiX(link);
    var sideWindow = new electron_1.BrowserWindow({
        width: wid,
        height: hei,
        autoHideMenuBar: true,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true //Hablitar integração do Node com o Electron
        }
    });
    sideWindow.loadURL("" + link, { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36' });
});
function widX(link) {
    if (link == "https://youtube.com/") {
        wid = 550;
    }
    else if (link == "https://www.twitch.tv/") {
        wid = 500;
    }
    else if (link == "https://web.whatsapp.com/") {
        wid = 800;
    }
    else if (link == "file://" + path.resolve(__dirname, 'assets', 'pages', 'spotify.html')) {
        wid = 400;
    }
    else {
        var wid = 800;
    }
    return wid;
}
function heiX(link) {
    if (link == "https://youtube.com/") {
        hei = 380;
    }
    else if (link == "https://www.twitch.tv/") {
        hei = 310;
    }
    else if (link == "https://web.whatsapp.com/") {
        hei = 710;
    }
    else if (link == "file://" + path.resolve(__dirname, 'assets', 'pages', 'spotify.html')) {
        hei = 115;
    }
    else {
        var hei = 800;
    }
    return hei;
}
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
//# sourceMappingURL=main.js.map