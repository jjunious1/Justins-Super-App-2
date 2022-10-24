import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav ClassName ="navbar">
      <h3>Excellent Nutrition</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/recipes">All Recipes</Link>
        <Link to="/createrecipe">Create Recipe</Link>
        <Link to="/create_meal_plan">Make a meal Plan</Link>
        <Link to="/">Back</Link>
      </div>
    </nav>
  )
}

export default Nav