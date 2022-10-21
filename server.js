const db = require('./db')
const PORT = process.env.PORT || 3001
const express = require('express')

const app = express()

//middleware

//routes

app.listen(PORT, () => {
  console.log(`Express server listening on port : ${PORT}`)
})
