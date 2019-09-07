import React, {Component} from 'react';
import addBtn from '../../assets/images/add-btn.svg'
import {Link} from "react-router-dom";
import config from "../../config/config";
import axios from 'axios'

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            searchQuery: ''
        }
    }

    componentDidMount(){
        axios
            .get(config.serverUrl + 'private/cities')
            .then(res=>{
                this.setState({cities: res.data})
            })
            .catch(err=>{
                console.log(err)
            })
    }


    render() {
        return (
            <div>
                <div>
                    <div className='offset-2 col-8 bg-secondary mt-5 d-flex flex-wrap p-0 text-light'>
                        <input autoFocus onChange={(e)=>{this.setState({searchQuery: e.target.value})}} value={this.state.searchQuery} placeholder={'Αναζητηση πολης'} className='col-12' type="text"/>
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
                                this.state.cities.filter(city=> {
                                    if(this.state.searchQuery !== ''){
                                        if(city.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) || city.url.toLowerCase().includes(this.state.searchQuery.toLowerCase())){
                                            return city
                                        }
                                    }else{
                                        return city
                                    }
                                })
                                    .map((city,i)=>{
                                        return (
                                            <tr key={i} className='app-pointer' onClick={()=>{this.props.history.push('/cities/edit/' + city._id)}}>
                                                <td>
                                                    {city.name}
                                                </td>
                                                <td>
                                                    /city/{city.url}
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
                </div>


                <div className='add-new-wrapper'>
                    <Link to={'/cities/edit/new'}> <img src={addBtn} className='add-btn' alt=""/> </Link>
                </div>
            </div>
        );
    }
}

export default Cities;