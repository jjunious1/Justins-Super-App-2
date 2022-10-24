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
      {recipes.map((recipe) => (
        <Recipe
          name={recipe.name}
          url={recipe.url}
          description={recipe.description}
        />
      ))}
    </div>
  )
}

export default Recipes
