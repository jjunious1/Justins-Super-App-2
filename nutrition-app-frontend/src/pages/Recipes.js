import Recipe from '../components/Recipe'
import { useState, useEffect } from 'react'
import axios from 'axios'

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
      <h1>All Recipes Here</h1>
      {recipes.map((meals) => (
        <Recipe
          foods={meals}
          name={meals.name}
          url={meals.url}
          description={meals.description}
        />
      ))}
    </div>
  )
}

export default Recipes
