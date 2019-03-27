import React from 'react'
import RecipesData from '../sample_data/recipes.json';

class RecipeItem extends React.Component {

    render() {
        return (
            <div className="col-sm-3 mt-4">
                <div className="card">

                    {RecipesData.results.map((RecipesDetail, index) => {
                        return (
                            <div>
                                <img className="card-img-top img-fluid" src="https://via.placeholder.com/350x300"  alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{RecipesDetail.title}</h5>
                                    <p className="card-text">
                                        <strong>Ingredients: </strong>{RecipesDetail.ingredients}
                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        );
    }
}

export default RecipeItem;