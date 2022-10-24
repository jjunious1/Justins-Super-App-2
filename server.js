const db = require('./db')
const cors = require('cors')
const express = require('express')
const Food = require('./meals/food')
const Days = require('./meals/days')
const Recipe = require('./meals/recipe')

const PORT = process.env.PORT || 3001

const app = express()

//middleware

app.use(express.json())
app.use(cors())

//routes
app.get('/', (req, res) => {
  res.json('this is working')
})

//Recipes Routes
app.get('/recipes', async (req, res) => {
  const allRecipes = await Recipe.find({}).populate('foodArray')
  res.json(allRecipes)
})

app.put('/create_meal_plan', async (req, res) => {
  const updateRecipes = await Recipe.findByIdAndUpdate(req.body)
  res.json(updateRecipes)
})

app.post('/createrecipe', async (req, res) => {
  const createRecipe = await Recipe.create(req.body)
  res.json(createRecipe)
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
  const newFood = await Food.insertMany(req.body)
  res.json(newFood)
})

//delete food

app.delete('/food/:id', async (req, res) => {
  const deleteFood = await Food.findByIdAndDelete(req.params.id)
  res.json(deleteFood)
})

//Days routes

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.listen(PORT, () => {
  console.log(`Express server listening on port : ${PORT}`)
})
