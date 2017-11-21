import React from 'react';


class RecipeTile extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    return(

      <div className="container">
        <div className="row tileContainer" >
        {this.props.data[0].hits.map((item,i)=>{
             console.log(item.recipe);

            return(
              <div className="col-xs-2" key={i}>
               <img src={item.recipe.image} className="foodTile" />
                 <div className="foodTitleName">{item.recipe.label}</div>
              </div>

          )

        })}
       </div>
      </div>
    )
  }
}


export default RecipeTile;
