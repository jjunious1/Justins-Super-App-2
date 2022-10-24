import { useEffect, useState } from 'react'
import axios from 'axios'

const Recipe = (props) => {

  return(
    <div>
      <h1>All Recipes here</h1>
      <ul>
        <li className="recipes">
          <img src = {props.url} alt= 'Picture' />
          <h3 className="recipeName">{props.name}</h3>
          <h4> {props.description}</h4>
          <h5>da</h5>
        </li>
      </ul>
    </div>
  )
}

export default Recipe