import axios from 'axios'
import { useEffect, useState } from 'react'

const MealPlan = () => {
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
