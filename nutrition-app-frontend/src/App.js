import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Recipes from './pages/Recipes'
import CreateRecipe from './pages/CreateRecipe'
import MealPlan from './pages/Mealplan'

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/createrecipes" element={<CreateRecipe />} />
          <Route path="/create_meal_plan" element={<MealPlan />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
