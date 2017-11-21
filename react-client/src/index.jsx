import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import sample_data from './components/sample_data.js';
import RecipeTile from './components/RecipeTile.jsx';
import Ingredients from './components/Ingredients.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data:[],
      listDataFromRecipe:[],
      listDataFromObj:null,
      isRecipeClicked:false

    }
    this.recipeHandle = this.recipeHandle.bind(this);
  }


  recipeHandle(data,dataObj){
    this.setState({
      listDataFromRecipe:data,
      listDataFromObj:dataObj,
      isRecipeClicked:true
    });
  }


  render () {
   const isRecipeClicked = this.state.isRecipeClicked;
   let ingredient = null;
   if(isRecipeClicked){
     ingredient = <Ingredients listData={this.state.listDataFromRecipe}  />
   }


    return (
      <div>

      <RecipeTile data={sample_data} recipeHandle={this.recipeHandle}/>
      {/* <Ingredients listData={this.state.listDataFromRecipe}  /> */}
      {ingredient}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
