const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('sites.db')

db.serialize(function() {
    db.run(`
        CREATE TABLE IF NOT EXISTS sites(
            id INTEGER PRIMARY KEY auto_increment,
            image TEXT,
            title TEXT,
            link TEXT,
            width INT DEFAULT '800',
            height INT DEFAULT '800',
            sub BOOLEAN,
            minimize BOOLEAN
        );
    `)
})
/*
function addSite() {
    const query = `
        INSERT INTO ideas(
            image, 
            title, 
            link, 
            width, 
            height,
            sub,
            minimize
        ) VALUES (?,?,?,?,?);
        `
        
     const values = [
        req.body.image,    
        req.body.title,    
        req.body.link,    
        req.body.width,    
        req.body.height,    
        req.body.sub,    
        req.body.minimize,    
    ]
        
        db.run (query, values, function(err) {
            if(err) {
                console.log(err)
                return res.send("Erro no banco de dados")
            }
            console.log(this)
            return console.log("error")
        })

        db.all(`SELECT * FROM sites`, function(err,rows) {
        if(err) return console.log(err)

        console.log(rows)
        })
}

export default db;
*/