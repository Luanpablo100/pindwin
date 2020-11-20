const electron = require('electron')
const {BrowserWindow, ipcRenderer} = electron

var l = document.getElementsByClassName("link");
var i;
for (i = 0; i < l.length; i++) {
l[i].addEventListener('click', (event) => {
    event.preventDefault()
    var link = event.target.href
    if (link == "https://www.twitch.tv/") {
        alert("Após encontrar a live desejada, coloque-a em modo teatro!")
    }
    ipcRenderer.send('sendLink', link)
})}

var a = document.getElementsByClassName("addIc");
var c;
for (c = 0; c < a.length; c++) {
a[c].addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('addModal').classList.toggle('desactive')
    document.getElementById('addModal').classList.toggle('active')
})}

document.getElementById('search').addEventListener('submit', (event) => {
    event.preventDefault()
    var searchtext = document.getElementById('search-bar').value
    console.log(searchtext)
    ipcRenderer.send('sendLink', searchtext)
})

