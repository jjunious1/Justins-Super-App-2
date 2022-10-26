import Recipe from '../components/Recipe'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MealPlan from './Mealplan'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get('http://localhost:3001/recipes')
      setRecipes(response.data)
    }
    getRecipes()
  }, [])

  return (
    <div>
      <h1 className="title">All Recipes Here</h1>
      {recipes.map((meals) => (
        <Recipe
          foods={meals}
          name={meals.name}
          url={meals.url}
          description={meals.description}
          key={meals._id}
        />
      ))}
    </div>
  )
}

export default Recipes
