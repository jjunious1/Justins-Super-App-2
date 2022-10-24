import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className ="navbar">
      <h3>Excellent Nutrition</h3>
      <div className = "barlinks">
        <Link to="/recipes">Home</Link>
        <Link to="/createrecipe">MakeRecipe</Link>
        <Link to="/create_meal_plan">MealPlan</Link>
        <Link to="/recipes">Back</Link>
      </div>
    </nav>
  )
}

export default Nav