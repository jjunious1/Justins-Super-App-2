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
    let submittedRecipe = await axios.post('http://localhost:3001/createrecipe')
  }

  return (
    <div>
      <h2>this is where you can make a recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input></input>
      </form>
    </div>
  )
}

export default CreateRecipe
