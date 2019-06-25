import React, {Component} from 'react';
import addBtn from '../../assets/images/add-btn.svg'
import {Link} from "react-router-dom";

class Cities extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <div className='add-new-wrapper'>
                    <Link to={'/cities/edit/0'}> <img src={addBtn} className='add-btn' alt=""/> </Link>
                </div>
            </div>
        );
    }
}

export default Cities;