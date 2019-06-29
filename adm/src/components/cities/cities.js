import React, {Component} from 'react';
import addBtn from '../../assets/images/add-btn.svg'
import {Link} from "react-router-dom";
import config from "../../config/config";
import axios from 'axios'

class Cities extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        axios
            .get(config.serverUrl + 'cities')
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }


    render() {
        return (
            <div>
                <div className="bg-info">
                    oaksdoaks
                </div>


                <div className='add-new-wrapper'>
                    <Link to={'/cities/edit/0'}> <img src={addBtn} className='add-btn' alt=""/> </Link>
                </div>
            </div>
        );
    }
}

export default Cities;