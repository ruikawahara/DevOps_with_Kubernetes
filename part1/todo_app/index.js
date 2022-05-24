// Code Source:
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#helloworld_express

//image: ruikawahara/web_server

const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server started in port ${port}`)
})

app.get('/', (req, res) => {
    res.send(`Returning GET request. Current port: ${port}`)
})