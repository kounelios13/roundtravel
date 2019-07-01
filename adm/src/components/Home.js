import React, {Component} from 'react';
import '../App.css';
import {connect} from "react-redux";
import Login from "./auth/login";

class Home extends Component {

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

            <div>
                {!this.props.auth.isAuthenticated && <Login /> }
                {this.props.auth.isAuthenticated && <h1>Welcome to RT Admin panel, have a pleasant stay!</h1>}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Home);