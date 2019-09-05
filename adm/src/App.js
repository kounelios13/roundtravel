import React, {Component} from 'react';
import AppRouter from "./components/app-router";
import {initAuthData} from "./utils/init-auth-data";
import { ToastContainer} from 'react-toastify';
import Particles from 'react-particles-js';

class App extends Component {



    componentWillMount() {
        initAuthData()
    }

    render() {
        return (
            <div className="App">
                <div className="position-absolute w-100">
                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 50
                                },
                                "size": {
                                    "value": 1
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }} />
                </div>
                <AppRouter/>
                <ToastContainer />

            </div>
        );
    }

}

export default App;