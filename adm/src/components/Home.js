import React, {Component} from 'react';
import AppRouter from "./app-router";
import '../App.css';
import {connect} from "react-redux";

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
        console.log(this.props.auth)
        return (
            <div>
                {!this.state.auth.isAuthenticated &&
                    <div className='login-input'>
                        <input className='login-input-form' type="password"/>
                        <br/>
                        <div>
                            <div>
                                Little monkey locked the door 🙈
                            </div>
                            <div>
                                Say what he'd like to hear
                            </div>
                        </div>
                    </div>
                }
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