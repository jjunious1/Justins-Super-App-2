import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MealPlan = () => {
  const { id } = useParams()
  const [date, setDate] = useState('')
  const [mealPlans, setMealPlans] = useState([])

  const [updateMeal, setMeal] = useState({
    breakfast: '',
    lunch: '',
    dinner: ''
  })
  useEffect(() => {}, [])
  useEffect(() => {
    const getMeals = async () => {
      const response = await axios.get('http://localhost:3001/create_meal_plan')
      setMealPlans(response.data)
    }
    getMeals()
  }, [])

  const handleChanges1 = (evt) => {
    setMeal({ ...updateMeal, [evt.target.id]: evt.target.value })
  }
  return (
    <div>
      <h3>This will be were the mealplans happen</h3>
      <ul>
        <div className="Monday meals"></div>
        <div className=" Tuesday meals"></div>
        <div className=" Wednesday meals"></div>
        <div className=" Thursday meals"></div>
        <div className=" Friday meals"></div>
      </ul>
    </div>
  )
}

export default MealPlan
