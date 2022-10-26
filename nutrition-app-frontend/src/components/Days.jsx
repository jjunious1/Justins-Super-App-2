import { useEffect, useState } from "react"
import axios from "axios"


const Days = (props) => {

  const [dayId, setDayId] = useState('')


    const deleteMeal = async () => {
    const response = await axios.delete(
      `http://localhost:3001/create_meal_plan/:id`,
      dayId
    )}

  const handleChange = (evt) => {
    setDayId(evt.target.value)
    deleteMeal()
  }

  return(
    <div className ="createdmeals">
      <ul>
      <button value = {props.id} onClick={handleChange}>Delete recipes</button>
        <li className="Meal Plan">
          <h3 className="Meal Day">{props.weekDay}</h3>
          <h4> {props.breakfast}</h4>
          <h4>{props.lunch}</h4>
          <h4>{props.dinner}</h4>
        </li>
      </ul>  
    </div>
  )
}

export default Days
