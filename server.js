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
app.use(express.static(`${__dirname}/nutrition-app-frontend/build`))

//routes
app.get('/', (req, res) => {
  res.json('this is working')
})

//USED TO SHOW ALL RECIPES ON HOME PAGE

//Gets all recipes
app.get('/recipes', async (req, res) => {
  const allRecipes = await Recipe.find({}).populate('foodArray')
  res.json(allRecipes)
})

// USED FOR CREATING RECIPE

// used to create recipe and attach food as an array
app.post('/createrecipe', async (req, res) => {
  const createRecipe = await Recipe.insertMany(req.body)
  res.json(createRecipe)
})

//designed to show all food options while creating recipes
app.get('/createrecipe', async (req, res) => {
  const getRecipes = await Food.find({})
  res.json(getRecipes)
})

app.post('/createrecipe/food', async (req, res) => {
  const makeRecipe = await Food.create(req.body)
  res.json(makeRecipe)
})

//USED TO  MAKE/UPDATE A MEAL PLAN

//used to pull recipes for meal plan page
app.get('/create_meal_plan/:id', async (req, res) => {
  const allRecipes = await Recipe.find({})
  res.json(allRecipes)
})

//updates days schema to create meal plan
app.put('/create_meal_plan/:id', async (req, res) => {
  const updateRecipes = await Days.findOneAndUpdate(
    { date: req.params.id },
    req.body,
    { new: true }
  )
    .populate('breakfast')
    .populate('lunch')
    .populate('dinner')
  res.json(updateRecipes)
})

//used to delete added Recipes to meal plan
app.delete('/create_meal_plan/:id', async (req, res) => {
  const deleteRecipe = await Days.findByIdAndDelete(req.params.id)
  res.json(deleteRecipe)
})

//ALL BELOW ROUTES ARE FOR FILLING DATABASE
//used to create days documents

app.post('/create_meal_plan', async (req, res) => {
  const mealPlans = await Days.insertMany(req.body)
  res.json(mealPlans)
})

app.get('/create_meal_plan', async (req, res) => {
  const getMeals = await Days.find({})
  res.json(getMeals)
})

// create food used to fill database
app.post('/food', async (req, res) => {
  const newFood = await Food.insertMany(req.body)
  res.json(newFood)
})
//Food Routes used to check food Creation in database
app.get('/food', async (req, res) => {
  const allFood = await Food.find({})
  res.json(allFood)
})

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/nutrition-app-frontend/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port : ${PORT}`)
})
