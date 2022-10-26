const Food = (props) => {

 
  
    return(
      <div>
        <ul>
          <li className="recipes">
            <h3 className="recipeName">{props.name}</h3>
            <h4> {props.description}</h4>
            <h5></h5>
          </li>
        </ul>
      </div>
    )
  }
  
  export default Food