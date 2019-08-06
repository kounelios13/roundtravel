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
                    <div className='offset-2 col-8 bg-secondary mt-5 d-flex flex-wrap p-0'>
                        <input onChange={(e)=>{this.setState({searchQuery: e.target.value})}} value={this.state.searchQuery} placeholder={'Αναζητηση πολης'} className='col-8 offset-2' type="text"/>
                        {this.state.cities.filter(city=> {
                            if(this.state.searchQuery !== ''){
                                if(city.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())){
                                    return city
                                }
                            }else{
                                return city
                            }
                        })
                            .map((city,i)=>{
                            return (
                                <div key={i} className={'m-5 app-pointer'} onClick={()=>{this.props.history.push('/cities/edit/' + city._id)}}>

                                    <img src={config.imagesUrl + city.images[0].url} className='city-image p-0 m-0' alt=""/>
                                    <div className={'text-center'}>
                                        {city.name.toUpperCase()}
                                    </div>
                                </div>
                            )
                        })}
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