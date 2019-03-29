import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import RecipesData from '../sample_data/recipes.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  }

render() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-10">
        <div className="row">
          {RecipesData.results.map(recipe => 
                <RecipeItem
                  title={recipe.title}
                  ingredients={recipe.ingredients}
                  source={recipe.href}
                  thumbnail={recipe.thumbnail} />
          )}
        </div>
      </div>
    </div>
  );
}
}
export default App;
