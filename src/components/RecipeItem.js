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

/*
class RecipeItem extends React.Component {

    render() {
        return (
            <div className="col-sm-3 mt-4">
                <div className="card">
                    <div>
                        <img className="card-img-top img-fluid"  src={this.props.searchString.thumbnail} alt={this.props.searchString.title} />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.searchString.title}</h5>
                            <p className="card-text">
                                <strong>Ingredients: </strong>{this.props.searchString.ingredients}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
*/
export default RecipeItem;