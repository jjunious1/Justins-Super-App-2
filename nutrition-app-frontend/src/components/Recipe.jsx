import { useEffect, useState } from 'react'
import axios from 'axios'

const Recipe = (props) => {

let foods= props.foods.foodArray.map((food)=> (
( food.name +"  ")
 ))

  return(
    <div>
      <ul>
        <li className="recipes">
          <img src = {props.url} alt= 'Picture' />
          <h3 className="recipeName">{props.name}</h3>
          <h4> {props.description}</h4>
          <h5>{foods}</h5>
        </li>
      </ul>
    </div>
  )
}

export default Recipe