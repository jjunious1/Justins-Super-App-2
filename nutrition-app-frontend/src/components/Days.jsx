
const Days = (props) => {

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
