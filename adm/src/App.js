import React, {Component} from 'react';
import AppRouter from "./components/app-router";
import {initAuthData} from "./utils/init-auth-data";
import { ToastContainer} from 'react-toastify';

class App extends Component {



    componentWillMount() {
        initAuthData()
    }

    render() {
        return (
            <div className="App">
                <AppRouter/>
                <ToastContainer />

            </div>
        );
    }

}

export default App;