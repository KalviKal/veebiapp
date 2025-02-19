const express = require('express')

const app = express()

app.get('/tervitus', (req, res) => {
    res.end('Tere maailm')
})

app.listen(3200)