import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../index.css';
import Home from "./Home";
import {connect} from "react-redux";
import Cities from "./cities/cities";
import EditCity from "./cities/edit-city";
import Countries from "./countries/countries";
import EditCountry from "./countries/edit-country";
import Categories from "./categories/categories";
import EditCategories from "./categories/edit-categories";
import Tours from "./tours/tours";
import EditTour from "./tours/edit-tour";
import Particles from 'react-particles-js';

class AppRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: {}
        }
        this.particleOps = {
            "particles": {
                "number": {
                    "value": 90,
                    "density": {
                        "enable": false,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#3ade61"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.8551164387345227,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 189.39543399174545,
                    "color": "#4bf540",
                    "opacity": 0.2683101981549727,
                    "width": 1.1048066982851816
                },
                "move": {
                    "enable": true,
                    "speed": 3.1565905665290903,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 1420.4657549380909,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
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
                                        <Link className="nav-link" to='/home'>ΚΕΝΤΡΙΚΗ<span className="sr-only">(current)</span></Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/tours'}>ΕΚΔΡΟΜΕΣ</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/countries'}>ΧΩΡΕΣ</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/cities'}>ΠΟΛΕΙΣ</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/categories'}>ΚΑΤΗΓΟΡΙΕΣ</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                }


                <div className="position-absolute w-100 particles">
                    <Particles
                        className='particles'
                        params={this.particleOps} />
                </div>


                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />

                <Route path="/tours" exact component={Tours} />
                <Route path="/tours/edit/:id" exact component={EditTour} />

                <Route path="/cities" exact component={Cities} />
                <Route path="/cities/edit/:id" exact component={EditCity} />

                <Route path="/countries" exact component={Countries} />
                <Route path="/countries/edit/:id" exact component={EditCountry} />

                <Route path="/categories" exact component={Categories} />
                <Route path="/categories/edit/:id" exact component={EditCategories} />




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