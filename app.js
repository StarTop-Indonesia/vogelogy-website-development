const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname})
})

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`)
})