import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=" home font-face-gm">
      <h1 className="titleLine">Welcome To Excellent Nutrition</h1>
      <h2>
        Feel Free to explore all of our Recipes and make a weekly Meal Plan
      </h2>
      <Link to="/recipes">
        <button className="firstPage">All Recipes</button>
      </Link>
      <img
        className="homeImg"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2cHDGs9IJZJ9gQEHVT7e2QHaLH%26pid%3DApi&f=1&ipt=9a0286558e3153c8db556adebd49373b81eb4e1a8b0733047510972191db1a04&ipo=images"
        alt="picture"
      />
    </div>
  )
}

export default Home
