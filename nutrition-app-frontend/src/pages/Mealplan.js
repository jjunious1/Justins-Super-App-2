import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Days from '../components/Days'

const MealPlan = () => {
  const [date, setDate] = useState('')
  const [mealPlans, setMealPlans] = useState([])
  const [recipes, setRecipes] = useState([])
  let navigate = useNavigate()

  const [updateMeal, setMeal] = useState({
    breakfast: '',
    lunch: '',
    dinner: ''
  })

  useEffect(() => {
    const getRecipes = async () => {
      const recipeResponse = await axios.get(
        'http://localhost:3001/create_meal_plan/:id'
      )
      setRecipes(recipeResponse.data)
    }
    getRecipes()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.put(
      `http://localhost:3001/create_meal_plan/${date.date}`,
      updateMeal
    )
    setMeal({
      breakfast: '',
      lunch: '',
      dinner: ''
    })
    setDate('')
    document.getElementById('breakfast').value = '0'
    document.getElementById('lunch').value = '0'
    document.getElementById('dinner').value = '0'
    document.getElementById('date').value = '0'
    let newData = response.data
    setMealPlans(...mealPlans.push(newData))
    navigate(`/create_meal_plan/${date.date}`)
  }

  const handleValues = (evt) => {
    setMeal({ ...updateMeal, [evt.target.id]: evt.target.value })
  }
  const handleDate = (evt) => {
    setDate({ ...date, [evt.target.id]: evt.target.value })
  }

  return (
    <div className="createdMeals">
      <h3 className="plans">This will be were the mealplans happen</h3>
      <form>
        <div className="meals">
          <label htmlFor="name">Breakfast</label>
          <select id="breakfast" onChange={handleValues}>
            <option value="0"></option>
            {recipes.map((recipe) => (
              <option value={recipe._id}>{recipe.name}</option>
            ))}
          </select>
          <label htmlFor="lunch">Lunch</label>
          <select id="lunch" onChange={handleValues}>
            <option value="0"></option>
            {recipes.map((recipe) => (
              <option value={recipe._id} key={recipe._id}>
                {recipe.name}
              </option>
            ))}
          </select>
          <label htmlFor="dinner">Dinner</label>
          <select id="dinner" onChange={handleValues}>
            <option value="0"></option>
            {recipes.map((recipe) => (
              <option value={recipe._id}>{recipe.name}</option>
            ))}
          </select>
          <select id="date" onInput={handleDate}>
            <option value="0"></option>
            <option>Oct24</option>
            <option>Oct26</option>
            <option>Oct27</option>
            <option>Oct28</option>
            <option>Oct31</option>
            <option>Nov1</option>
            <option>Nov2</option>
            <option>Nov3</option>
            <option>Nov4</option>
            <option>Nov7</option>
            <option>Nov8</option>
            <option>Nov9</option>
            <option>Nov10</option>
            <option>Nov11</option>
            <option>Nov14</option>
            <option>Nov15</option>
            <option>Nov16</option>
            <option>Nov17</option>
            <option>Nov18</option>
            <option>Nov21</option>
            <option>Nov22</option>
            <option>Nov23</option>
            <option>Nov24</option>
            <option>Nov25</option>
            <option>Nov28</option>
            <option>Nov29</option>
            <option>Nov30</option>
            <option>Dec1</option>
            <option>Dec2</option>
          </select>
          <button onClick={handleSubmit}>Submit Meal</button>
        </div>
      </form>
      {mealPlans.map((meals) => (
        <Days
          breakfast={meals.breakfast.name}
          lunch={meals.lunch.name}
          dinner={meals.dinner.name}
          weekDay={meals.name}
          key={meals._id}
          id={meals._id}
        />
      ))}
    </div>
  )
}

export default MealPlan
