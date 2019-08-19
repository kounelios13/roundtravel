import React, {Component} from 'react';
import {Link} from "react-router-dom";
import addBtn from "../../assets/images/add-btn.svg";

class Tours extends Component {
    render() {
        return (
            <div>
                <div className='add-new-wrapper'>
                    <Link to={'/tours/edit/new'}> <img src={addBtn} className='add-btn' alt=""/> </Link>
                </div>
            </div>
        );
    }
}

export default Tours;