const db = require('./db')
const PORT = process.env.PORT || 3001
const express = require('express')
const { Food } = require('./meals')

const app = express()

//middleware

//routes

app.get('/', (req, res) => {
  res.send('this is fucking working')
})

app.post('/food', async (req, res) => {
  let createFood = await Food.create(req.body)
  res.json(createFood)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port : ${PORT}`)
})
