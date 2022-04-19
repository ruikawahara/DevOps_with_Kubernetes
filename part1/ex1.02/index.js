// Code Source:
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#helloworld_express

const express = require('express')
const app = express()
const port = 8000

app.listen(port, () => {
    console.log(`Server started in port ${port}`)
})