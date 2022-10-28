import { useState, useEffect } from 'react'
import axios from 'axios'
import Food from '../components/Food'
import { useNavigate } from 'react-router-dom'

const CreateRecipe = (props) => {
  //useState variables

  const [foods, setFood] = useState([])
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    foodArray: [],
    description: '',
    url: ''
  })
  const [newFood, setNewFood] = useState({
    name: '',
    url: '',
    calories: '',
    nutrition: '',
    description: ''
  })

  let navigate = useNavigate()

  //useEffect variable that gets all food documents
  useEffect(() => {
    const getFood = async () => {
      const recipeResponse = await axios.get(
        'http://localhost:3001/createrecipe'
      )
      setFood(recipeResponse.data)
    }
    getFood()
  }, [])

  //functions handles adding the inputs to the newRecipe state and the second one adds the ids to the newRecipe foodArray
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
  }

  const foodChange = (evt) => {
    setNewFood({
      ...newFood,
      [evt.target.id]: evt.target.value
    })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    let submittedRecipe = await axios.post(
      'http://localhost:3001/createrecipe',
      newRecipe
    )
    setNewRecipe({ name: '', foodArray: [], description: '', url: '' })
  }

  const foodSubmit = async (evt) => {
    let createFood = await axios.post(
      'http://localhost:3001/createrecipe/food',
      newFood
    )
    navigate('/createrecipe/food')
    navigate('/createrecipe')
    setNewFood({
      name: '',
      url: '',
      calories: '',
      nutrition: '',
      description: ''
    })
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
        <label>Add food here</label>
        <form id="addFood">
          <input
            id="name"
            value={newFood.name}
            placeholder="food name"
            onChange={foodChange}
          ></input>
          <input
            id="url"
            value={newFood.url}
            placeholder="image"
            onChange={foodChange}
          ></input>
          <input
            id="calories"
            value={newFood.calories}
            placeholder="calories"
            onChange={foodChange}
          ></input>
          <input
            id="nutrition"
            value={newFood.nutrition}
            placeholder="nutrition"
            onChange={foodChange}
          ></input>
          <input
            id="description"
            value={newFood.description}
            placeholder="description"
            onChange={foodChange}
          ></input>
          <button onClick={foodSubmit}>Add Food</button>
        </form>
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
