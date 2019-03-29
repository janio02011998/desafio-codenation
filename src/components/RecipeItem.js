import React from 'react'

class RecipeItem extends React.Component {

    render() {
        return (
            <div className="col-sm-3 mt-4">
                <div className="card">
                    <div>
                        <img className="card-img-top img-fluid"  src={this.props.thumbnail} alt={this.props.title} />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">
                                <strong>Ingredients: </strong>{this.props.ingredients}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default RecipeItem;