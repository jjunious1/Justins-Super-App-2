import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Recipes from './pages/Recipes'
import CreateRecipe from './pages/CreateRecipe'
import MealPlan from './pages/Mealplan'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/createrecipe" element={<CreateRecipe />} />
          <Route path="/create_meal_plan/:id" element={<MealPlan />} />
          <Route path="/createrecipe/food" element={<CreateRecipe />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
