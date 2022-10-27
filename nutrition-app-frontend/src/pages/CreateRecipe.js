import { useState, useEffect, Children } from 'react'
import axios from 'axios'
import Food from '../components/Food'

const CreateRecipe = (props) => {
  const [foods, setFood] = useState([])
  const [inputData, setInputData] = useState([])
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    foodArray: [],
    description: '',
    url: ''
  })

  useEffect(() => {
    const getFood = async () => {
      const recipeResponse = await axios.get(
        'http://localhost:3001/createrecipe'
      )
      setFood(recipeResponse.data)
    }
    getFood()
  }, [])

  const handleChange = (evt) => {
    setNewRecipe({
      ...newRecipe,
      [evt.target.id]: evt.target.value
    })
  }
  const handleChange2 = (evt) => {
    setNewRecipe({
      ...newRecipe,
      [evt.target.value]: newRecipe.foodArray.push(evt.target.value)
    })
    // console.log(evt.target.children.nextElementSibling)
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
      <h2 className="recipetitle">Add food to make a Recipe</h2>
      <form className="recipeform" onSubmit={handleSubmit}>
        <label htmlFor="name" className="labelform">
          Name:
        </label>
        <input id="name" value={newRecipe.name} onChange={handleChange} />
        <label htmlFor="description" className="labelform">
          Description
        </label>
        <input
          id="description"
          value={newRecipe.description}
          onChange={handleChange}
        />
        <label htmlFor="url" className="labelform">
          Url
        </label>
        <input id="url" value={newRecipe.url} onChange={handleChange} />
        <label>MultiSelect</label>
        <input id="multiSelect" />
        <select id="foodArray" multiple onChange={handleChange2}>
          <option></option>
          {foods.map((food) => (
            <option value={food._id} key={food.name}>
              {food.name}
            </option>
          ))}
        </select>
        <button type="submit">New Recipe</button>
      </form>
      <div className="recipepage">
        {foods.map((food) => (
          <Food
            name={food.name}
            description={food.description}
            calories={food.calories}
            nutrition={food.nutrition}
            url={food.url}
            key={food._id}
          />
        ))}
      </div>
    </div>
  )
}

export default CreateRecipe

// referenced this stackoverflow to dynamically create inputs. https://stackoverflow.com/questions/55921971/how-to-get-a-map-array-in-javascript-to-print-in-a-dropdown-list
