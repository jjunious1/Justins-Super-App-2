import { useEffect, useState } from "react"


const Days = (props) => {
  return(
    <div className ="createdmeals">
       <ul>
       <button>Delete recipes</button>
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
