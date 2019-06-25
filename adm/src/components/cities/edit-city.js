import React, {Component} from 'react';
import {FaMinus, FaPlus} from "react-icons/fa";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileUpload from "../utils/file-upload";
import config from '../../config/config'


class EditCity extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: '',
            description: '',
            history: '',
            tags: '',
            activities: [],
            images: [{url: 'public/parisi/64531.jpg', alt: ''},{url: 'public/parisi/64531.jpg', alt: ''},{url: 'public/parisi/64531.jpg', alt: ''}]
        }
        this.addActivity = this.addActivity.bind(this)
        this.deleteActivity = this.deleteActivity.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleActivityChange = this.handleActivityChange.bind(this)
        this.addImage = this.addImage.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    deleteActivity(i){
        let activities = this.state.activities.filter((item, ind)=>{
            return ind != i
        })

        this.setState({activities: activities})
    }

    addImage(){
        this.setState({images: [...this.state.images, {url: '', alt: ''}]})
    }

    handleActivityChange(e){
        let field = e.target.name.split('-')[1]
        let index = e.target.name.split('-')[2]
        let activities = this.state.activities

        if(field === 'name'){
            activities[index].name = e.target.value
            this.setState({activities: activities})
        }
        if(field === 'description'){
            activities[index].description = e.target.value
            this.setState({activities: activities})
        }
    }

    addActivity(){
        this.setState({
            activities: [...this.state.activities, {name: '', description: ''}]
        })
    }


    render() {
        return (
            <div>
                <div className='col-8 offset-2  mt-5'>
                                <div className='col-6 offset-3 p-5 bg-info bg-form'>
                                    <form>
                                        <h4>Γενικές πληροφορίες</h4>
                                        <hr/>

                                        <div className='mt-3'>
                                            <label htmlFor="name">Ονομα πολης</label>
                                            <input name='name' value={this.state.name} className={'w-100'} type="text" onChange={this.handleChange} />
                                        </div>
                                        
                                        <div className='mt-3'>
                                            <label htmlFor="description">Περιγραφή πόλης</label>
                                            <textarea name='description' value={this.state.description} onChange={this.handleChange} className='w-100' rows="4" cols="50"></textarea>
                                        </div>
                                        
                                        <div className='mt-3'>
                                            <label htmlFor="history">Ιστορικα δεδομένα</label>
                                            <textarea name="history" value={this.state.history} onChange={this.handleChange} className="w-100" rows="4"></textarea>
                                        </div>

                                        <div className='mt-3 mb-5'>
                                            <label htmlFor="tags">Tags (Χρησημα για αναζητηση εντος του site)</label>
                                            <input name='tags' value={this.state.tags} onChange={this.handleChange} className={'w-100'} type="text"/>
                                        </div>

                                        <h3 className='d-inline'>Δραστηριοτητες</h3> <span className='text-danger' onClick={this.addActivity}><FaPlus /></span>
                                        <hr/>
                                        <div>
                                            {
                                                this.state.activities.map((activity,i)=>{
                                                    return (
                                                        <div className='mt-3 mb-3' key={i}>
                                                            <label htmlFor={'activity-name'+ '-' + i}>Όνομα δραστηριότητας</label> <span onClick={()=>{this.deleteActivity(i)}} className='text-danger'><FaMinus /></span>
                                                            <input name={'activity-name'+ '-' + i} value={this.state.activities[i].name} onChange={this.handleActivityChange} className={'w-100 mb-3'} type="text"/>
                                                            <label htmlFor="name">Περιγραφη δραστηριότητας</label>
                                                            <textarea name={'activity-description' + '-' + i} value={this.state.activities[i].description} onChange={this.handleActivityChange} className="w-100" rows="4"></textarea>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div>
                                            <h4 className='d-inline'>Είκονες πόλης</h4>
                                            <hr/>
                                            <div className={'my-5'}>
                                                {
                                                    this.state.images.map(img=>{
                                                        const imgSrc = config.serverUrl + img.url
                                                        console.log(imgSrc)
                                                        return(
                                                            <div className='border'>
                                                                <img src={imgSrc} className='city-edit-img img-fluid' alt=""/>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className='d-inline'>Μεταφορτώση είκονων</h4>
                                            <hr/>
                                            <FileUpload path={this.state.name} />
                                        </div>

                                    </form>
                                </div>
                </div>
            </div>
        );
    }
}

export default EditCity;