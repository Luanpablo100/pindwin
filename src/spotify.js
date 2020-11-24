document.getElementById('volume-btn').addEventListener('click', () => {
    document.getElementById('volume').classList.toggle('hidden')
    document.getElementById('player-opts').classList.toggle('move')
})

document.getElementById('next').addEventListener('click', () => {
    var img = document.getElementById('infoimg')
    img.src = 'https://images.genius.com/18bd5399067e6f2c81184548ad4a824c.999x999x1.jpg'
    var title = document.querySelector('#info span h3')
    var author = document.querySelector('#info span h4')
    title.innerHTML = 'We fell in love in October'
    author.innerHTML = 'girl in red'
})