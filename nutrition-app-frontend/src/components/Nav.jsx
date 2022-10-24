import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className ="navbar">
      <h3>Excellent Nutrition</h3>
      <div className = "barlinks">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/createrecipe">Create</Link>
        <Link to="/create_meal_plan">MealPlan</Link>
        <Link to="/">Back</Link>
      </div>
    </nav>
  )
}

export default Nav