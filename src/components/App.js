import React, { Component } from 'react'
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import data from "../sample_data/recipes.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  }

  componentDidMount() {
    this.setState({ searchString: data.results })

  }

  onChange(fieldName) {
    if (fieldName === '' || fieldName === null) this.setState({ searchString: data.results });

    var ingredients = data.results.filter((item, i) => {
      return item.ingredients.toLowerCase().indexOf(fieldName.toLowerCase()) !== -1;
    })

    var indexes = data.results.filter((item, i) => {
      return item.title.toLowerCase().indexOf(fieldName.toLowerCase()) !== -1;
    })
    console.log(indexes);
    if (indexes.length === 0) {
      this.setState({ searchString: ingredients });
    } else {
      this.setState({ searchString: indexes });
    }
   }

  render() {
    return (
      <div className="App">
        <Navbar onChange={this.onChange.bind(this)} />
        <div className="container mt-10">
          <div className="row">
            <RecipeItem list={this.state.searchString} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
