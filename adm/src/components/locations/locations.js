import React, {Component} from 'react';
import {Link} from "react-router-dom";
import addBtn from "../../assets/images/add-btn.svg";

class Locations extends Component {
    render() {
        return (
            <div>


                <div className='add-new-wrapper'>
                    <Link to={'/locations/edit/new'}> <img src={addBtn} className='add-btn' alt=""/> </Link>
                </div>
            </div>
        );
    }
}

export default Locations;