import Recipe from '../components/Recipe'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get('/recipes')
      setRecipes(response.data)
    }
    getRecipes()
  }, [])

  return (
    <div>
      <h1 className="title">All Recipes Here</h1>
      <div className="frontpage">
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
    </div>
  )
}

export default Recipes
