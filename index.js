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
                    p {
                    color: red;
                    text-align: center;
                    
                    }
                </style>
            </head>
            <body>
                <p><strong>${req.query.nimi}</strong> on maailma parim!</p>
            </body>
        </html>
        `)
})

app.listen(3200)