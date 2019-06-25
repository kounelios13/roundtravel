import React, {Component} from 'react';
import plusSign from '../../assets/images/plus.png'
import {FaMinus, FaPlus} from "react-icons/fa";
import axios from 'axios'

class EditCity extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: '',
            description: '',
            history: '',
            tags: '',
            activities: [],
            images: [{}]
        }
        this.addActivity = this.addActivity.bind(this)
        this.deleteActivity = this.deleteActivity.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleActivityChange = this.handleActivityChange.bind(this)
        this.addImage = this.addImage.bind(this)
        this.handleImageSubmit = this.handleImageSubmit.bind(this)

        this.uploadInput = React.createRef()
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

    handleImageSubmit(e){
        e.preventDefault()
        console.log()
        let data = new FormData()
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        };

        const files = Array.from(this.uploadInput.current.files)
        files.forEach((file,i)=>{
            data.append(i, file)
        })

        console.log(data)

        axios
            .post('http://localhost:9000/private/upload', data, config)
            .then((res)=>{
                console.log(res)
            })

    }

    render() {
        return (
            <div>
                <div className='col-8 offset-2 border mt-5'>
                                <div className='col-6 offset-3  p-5'>
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
                                            <h3 className='d-inline'>Εικόνες</h3> <span className='text-danger' onClick={this.addImage}><FaPlus /></span>
                                            <hr/>
                                            {
                                                this.state.images.map(image=>{
                                                    return(
                                                        <div>
                                                            {/*<input ref={this.uploadInput} type="file" name="sampleFile" />*/}
                                                            <input ref={this.uploadInput} type='file' id='multi' onChange={this.handleImageSubmit} multiple />

                                                            <button onClick={this.handleImageSubmit} className='btn btn-info'>Upload</button>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </div>
                                    </form>
                                </div>
                </div>
            </div>
        );
    }
}

export default EditCity;