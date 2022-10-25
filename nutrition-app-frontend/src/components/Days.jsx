import { useEffect, useState } from "react"


const Days = (props) => {
  return(
    <div>
       <ul>
        <li className="Meal Plan">
          <h3 className="Meal Day">{props.name}</h3>
          <h4> {props.description}</h4>
          <h5></h5>
        </li>
      </ul>  
    </div>
  )
}

export default Days
