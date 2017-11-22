import React from 'react';


const Ingredients = (props) =>(
  <div>

    <ul className="ing-title"> Ingredients
      {props.listData.map((ingredient,i)=>{

        return <li className="ing" key={i}>{ingredient}</li>
      })}

    </ul>
  </div>



)
export default Ingredients;
