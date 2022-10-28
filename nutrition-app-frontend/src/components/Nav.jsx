import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className ="navbar font-face-gm">
      <h1 className="sitename">Excellent Nutrition</h1>
      <div>
        <Link to="/" className = "barlinks">Home</Link>
        <Link to="/recipes" className= "barlinks">Recipes</Link>
        <Link to="/createrecipe" className = "barlinks">Make Recipe</Link>
        <Link to="/create_meal_plan/:id" className = "barlinks">Meal Plan</Link>
        <Link to="/recipes" className = "barlinks">Back</Link>
      </div>
    </nav>
  )
}

export default Nav