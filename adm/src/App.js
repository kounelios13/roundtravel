import React, {Component} from 'react';
import AppRouter from "./components/app-router";
import {initAuthData} from "./utils/init-auth-data";

class App extends Component {

    componentDidMount() {
        initAuthData()
    }

    render() {
        return (
            <div className="App">
                <AppRouter/>
            </div>
        );
    }

}

export default App;