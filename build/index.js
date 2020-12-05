"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
electron_1.app.on('ready', function () {
    var win = new electron_1.BrowserWindow({});
    win.loadURL('https://github.com');
    console.log('App is ready');
});
