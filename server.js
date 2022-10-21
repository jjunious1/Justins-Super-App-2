const db = require('./db')
const express = require('express')
const routes = require('./routes')

const PORT = process.env.PORT || 3001

const app = express()

//middleware

app.use(express.json())
//routes
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Express server listening on port : ${PORT}`)
})
