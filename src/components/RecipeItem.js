import React from 'react';
import '../index.css';

const RecipeList = ({ searchString }) => {
    return (
        <div>
            <img className="card-img-top img-fluid" src={searchString.thumbnail} alt={searchString.title} />
            <div className="card-body">
                <h5 className="card-title">{searchString.title}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{searchString.ingredients}
                </p>
            </div>
        </div>
    )
}


const RecipeItem = (props) => {
    if (props.list.length === 0) {
        return (
            <div className="col-centered">
                <h2> No Results to show</h2>
            </div>
        )
    }
    return (
        props.list && props.list.map((searchString, index) =>
            <div className="card col-sm-3 mt-4">
                <RecipeList searchString={searchString} key={index} />
            </div>
        )
    )
}

export default RecipeItem;