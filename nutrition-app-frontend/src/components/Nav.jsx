import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className ="navbar">
      <h1 className="sitename">Excellent Nutrition</h1>
      <div>
        <Link to="/recipes" className = "barlinks">Home</Link>
        <Link to="/createrecipe" className = "barlinks">MakeRecipe</Link>
        <Link to="/create_meal_plan/:id" className = "barlinks">MealPlan</Link>
        <Link to="/recipes" className = "barlinks">Back</Link>
      </div>
    </nav>
  )
}

export default Nav