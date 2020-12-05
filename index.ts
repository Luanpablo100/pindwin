import { app, BrowserWindow } from 'electron';
import path from 'path';
import db from './src/database/db';

app.on('ready', () => {
  const win = new BrowserWindow({});
  win.loadURL('https://github.com')
  console.log('App is ready');
});

console.log(db)
