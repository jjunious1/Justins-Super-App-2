import { useState, useEffect } from 'react'
import axios from 'axios'

const CreateRecipe = () => {
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    foodArray: [],
    description: '',
    url: ''
  })
  const [createdRecipe, setCreatedRecipe] = useState('')

  const handleChange = (evt) => {
    setNewRecipe({ ...newRecipe, [evt.target.id]: evt.target.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    let submittedRecipe = await axios.post(
      'http://localhost:3001/createrecipe',
      newRecipe
    )
    setNewRecipe({ name: '', foodArray: [], description: '', url: '' })
  }

  return (
    <div>
      <h2>this is where you can make a recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={newRecipe.name} onChange={handleChange} />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          value={newRecipe.description}
          onChange={handleChange}
        />
        <label htmlFor="url">Url</label>
        <input id="url" value={newRecipe.url} onChange={handleChange} />
        <button type="submit"> Add Recipe</button>
      </form>
    </div>
  )
}

export default CreateRecipe
