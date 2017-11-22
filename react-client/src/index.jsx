import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import sample_data from './components/sample_data.js';
import RecipeTile from './components/RecipeTile.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data:[]

    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (
      <div>

      <RecipeTile data={sample_data}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
