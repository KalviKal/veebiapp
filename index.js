const express = require('express')

const app = express()



app.get('/tervitus', (req, res) => {
    console.log(req.query)
    res.send("Tere maailm!")
})

app.get('/harjutus1', (req, res) => {
    console.log(req.query)
    res.send(`
        <html>

           
            <head>
                <style>
                    h1 {
                    color: red;
                    }
                </style>
            </head>
            <body>
                <h1><strong>${req.query.nimi}</strong> on maailma parim!</h1>
            </body>
        </html>
        `)
})

app.listen(3200)