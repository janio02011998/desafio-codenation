import React from 'react';

const RecipeList = ({ searchString }) => {
    return(
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
    return (
        <div className="col-sm-3 mt-4">
            <div className="card">
                {props.list && props.list.map((searchString, index) =>
                    <RecipeList searchString={searchString} key={index} />
                )}
            </div>
        </div>
    )
}

export default RecipeItem;