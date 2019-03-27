import React from 'react'
import logo from '../logo.svg';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageFilter: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            imageFilter: e.target.value
        })
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
                <div className="navbar-brand col-1">
                    <img src={logo} className="Navbar-logo" alt="logo" />
                </div>

                <div className="form-group justify-content-center row col-10 my-2">
                    <input
                        defaultValue={this.state.imageFilter}
                        onChange={this.state.handleChange}
                        className="form-control col-9 mr-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </div>
            </nav>
        )
    }
}

export default Navbar;
