const db = require('./db')
const express = require('express')
const Food = require('./meals/food')
const Days = require('./meals/days')
const Recipe = require('./meals/recipe')

const PORT = process.env.PORT || 3001

const app = express()

//middleware

app.use(express.json())

//routes
app.get('/', (req, res) => {
  res.json('this is working')
})

//Recipes Routes
app.get('/recipes', async (req, res) => {
  const allRecipes = await Recipe.find({})
  res.json(allRecipes)
})

//Food Routes
app.get('/food', async (req, res) => {
  const allFood = await Food.find({})
  res.json(allFood)
})

//get food by id

app.get('/food/:id', async (req, res) => {
  const oneFood = await Food.findById(req.params.id)
  res.json(oneFood)
})

// create food
app.post('/food', async (req, res) => {
  const newFood = await Food.create(req.body)
  res.json(newFood)
})

//edit food

//delete food

//Days routes

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.listen(PORT, () => {
  console.log(`Express server listening on port : ${PORT}`)
})
