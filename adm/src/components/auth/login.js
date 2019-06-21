import React, {Component} from 'react';
import {login} from "../../state/actions/auth";
import {connect} from "react-redux";

class Login extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this)
    }


    submitForm(e){
        if(e.key === 'Enter'){
            e.preventDefault()
            this.props.login(e.target.value)
        }
    }

    render() {
        return (
            <div>
                <div className='login-input'>
                    <form>
                        <input className='login-input-form' type="password" onKeyDown={this.submitForm} />
                    </form>
                    <br/>
                    <div>
                        <div>
                            Little monkey guarding the doorway <span>🙈</span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {login})(Login);