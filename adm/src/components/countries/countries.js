import React, {Component} from 'react';
import {Link} from "react-router-dom";
import addBtn from "../../assets/images/add-btn.svg";
import axios from 'axios'
import config from '../../config/config'
import { toast } from 'react-toastify';


class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            countries: []
        }
    }

    componentWillMount(){
        axios
            .get(config.serverUrl + 'private/countries')
            .then(res=>{
                this.setState({countries: res.data})
            })
            .catch(err=>{
                toast.error('Η λήψη των δεδομένων των πόλεων απέτυχε.', {position: toast.POSITION.BOTTOM_RIGHT})
            })
    }

    render() {
        return (
            <div>
                <div className='bg-info col-6 offset-3 p-0 mt-5'>
                    <input placeholder='Αναζητηση πολης' value={this.state.searchQuery} onChange={(e)=>{this.setState({searchQuery: e.target.value})}} type="text" autoFocus className='w-100'/>
                    {
                        this.state.countries
                            .filter(country=>{
                                if(this.state.searchQuery === ''){
                                    return true
                                }else {
                                    if (country.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())) {
                                        return country
                                    }
                                }
                            })
                            .map(country=>{
                            return (
                                <div onClick={()=>{this.props.history.push('/countries/edit/' + country._id)}} className='border-bottom my-3 app-hover app-pointer my-4' key={country._id}>
                                    <div className={'display-7 d-inline text-uppercase'}>
                                        {country.name}
                                    </div>
                                    <div className={'d-inline ml-5 mr-auto'}>
                                        <small>{country.url}</small>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='add-new-wrapper'>
                    <Link to={'/countries/edit/new'}> <img src={addBtn} className='add-btn' alt=""/> </Link>
                </div>
            </div>
        );
    }
}

export default Countries;