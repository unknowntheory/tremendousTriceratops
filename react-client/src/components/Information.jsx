import React from 'react';

class Information extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      healthLabels:[],
      cautions:[],
      servings: null,
      calories:null,
      render:false
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      healthLabels: nextProps.listInfo.recipe.healthLabels,
      cautions:nextProps.listInfo.recipe.cautions,
      servings:nextProps.listInfo.recipe.yield,
      calories:nextProps.listInfo.recipe.calories,
    //  render:true // to take care of render lag
    })
  }
  render(){
    let check = this.healthLabels;
    // let calories = 'loading'
    // if(this.state.render){
    //   calories = this.state.calories
    // }

    {console.log(this.props.listInfo)}
    console.log(this.state.healthLabels);
    return(
      <div className="col-md-4 list-group inf-div">
        {this.state.calories ?
        <div>
          <ul>Health Labels
          {this.state.healthLabels.map((item,i)=>{
            return <li key={i}>{item}</li>
          })}
          </ul>
          <ul>Cautions
          {this.state.cautions.map((item,i)=>{
            return <li key={i}>{item}</li>
          })}
          </ul>
          <ul>Servings
          <li>{this.state.servings}</li>
          </ul>
          <ul>calories
          <li>{this.state.calories ? this.state.calories : 'loading'} </li>
          </ul>

        </div>
       : null}
      </div>
    )
  }



}









// cautions and healtLabels
// [10:37]
// yield
// [10:38]
// calories
// [10:38]
// yield = servings
// Health Labels{props.listInfo.healtLabels((item,i)=>{
//   return <li key={i}>item</li>

export default Information;
