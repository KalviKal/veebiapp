const express = require('express')

const path = require("path")

//Importing data

const {naitaMatkad, registreeriOsaleja} = require("./controller")

const app = express();
app.use(express.json())
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/assets', express.static('public'))

app.get('/tervitus', (req, res) => {
    console.log(req.query)
    res.send("Tere maailm!")
})

app.get('/harjutus1', (req, res) => {
    console.log(req.query)
    res.send(`
        <html>
            <head>
                 <link rel="stylesheet" type="text/css" href="/assets/css/main.css">
                <style>
                    p {
                    color: red;
                    text-align: center;
                    
                    }
                </style>
            </head>
            <body>
                <h1>From Reparate CSS file</h1>
                <p><strong>${req.query.nimi}</strong> on maailma parim!!</p>
            </body>
        </html>
        `)
})



app.get('/matkad', naitaMatkad)
app.get('/registreeru', registreeriOsaleja)

app.listen(3200)