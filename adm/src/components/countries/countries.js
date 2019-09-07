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
                <div className='bg-info col-8 offset-2 p-0 mt-5 bg-secondary'>
                    <input placeholder='Αναζητηση πολης' value={this.state.searchQuery} onChange={(e)=>{this.setState({searchQuery: e.target.value})}} type="text" autoFocus className='w-100'/>
                    <div className="col-12 p-0">
                        <table className="table text-white cities-table">
                            <thead>
                            <tr>
                                <th scope="col">Όνομα πόλης</th>
                                <th scope="col">URL</th>
                                <th scope="col">Αριθμος εκδρομων</th>
                            </tr>
                            </thead>
                            <tbody>
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
                            .map((country, i)=>{
                            return (
                                    <tr onClick={()=>{this.props.history.push('/countries/edit/' + country._id)}}  key={i} className='app-pointer'>
                                        <td>
                                            {country.name}
                                        </td>
                                        <td>
                                            /city/{country.url}
                                        </td>
                                        <td>
                                            {((i + 3) + (i+1*2))}
                                        </td>
                                    </tr>
                            )
                        })
                    }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='add-new-wrapper'>
                    <Link to={'/countries/edit/new'}> <img src={addBtn} className='add-btn' alt=""/> </Link>
                </div>
            </div>
        );
    }
}

export default Countries;