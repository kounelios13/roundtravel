import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../index.css';
import Home from "./Home";
import {connect} from "react-redux";

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
                    this.state.auth.isAuthenticated &&
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-light navbar-fixed-top rt-adm-nav">
                            <a className="navbar-brand" href="#">RoundTravel</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Features</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                }
                <Route path="/" exact component={Home} />
            </Router>
        );
    }
}


export default AppRouter;