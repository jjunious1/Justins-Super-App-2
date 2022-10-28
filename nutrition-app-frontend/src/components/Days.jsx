import { useState } from "react"
import axios from "axios"


const Days = (props) => {

//   const [dayId, setDayId] = useState('')

// //deletes the current target meal
//     const deleteMeal = async () => {
//     const response = await axios.delete(
//       `http://localhost:3001/create_meal_plan/${dayId}`
//     )
//   }

//   const handleChange = (evt) => {
//     setDayId(evt.target.value)
//     console.log(dayId)
//     deleteMeal()
//   }

  return(
    <div className ="createdmeals">
      <ul>
      <button className="delete" value = {props.id} onClick={props.change}>Delete recipes</button>
        <li className="Meal Plan">
          <label>WeekDay</label>
          <h1 className="Meal Day">{props.weekDay}</h1>
          <h4> Breakfast: {props.breakfast}</h4>
          <h4>Lunch: {props.lunch}</h4>
          <h4>Dinner: {props.dinner}</h4>
        </li>
      </ul>  
    </div>
  )
}

export default Days
