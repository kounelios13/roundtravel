import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../index.css';
import Home from "./Home";
import {connect} from "react-redux";
import Cities from "./cities/cities";
import EditCity from "./cities/edit-city";

class AppRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: {}
        }
    }

    static getDerivedStateFromProps(props, state){
        return {
            auth: state.auth
        }
    }

    render() {
        return (
            <Router>
                {
                    this.props.auth.isAuthenticated &&
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-light navbar-fixed-top rt-adm-nav">
                            <Link className="navbar-brand" to={'/'}>RoundTravel</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to='/home'>Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/cities'}>Cities</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                }
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/cities" exact component={Cities} />
                <Route path="/cities/edit/:id" exact component={EditCity} />
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(AppRouter);