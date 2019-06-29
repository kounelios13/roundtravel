import React, {Component} from 'react';
import {FaArrowDown, FaArrowUp, FaMinus, FaPlus} from "react-icons/fa";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileUpload from "../utils/file-upload";
import config from '../../config/config'
import FileBrowser from "../utils/file-browser";


class EditCity extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: 'parisi',
            description: '',
            history: '',
            tags: '',
            activities: [],
            images: []
        }
        this.addActivity = this.addActivity.bind(this)
        this.deleteActivity = this.deleteActivity.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleActivityChange = this.handleActivityChange.bind(this)
        this.addImage = this.addImage.bind(this)
        this.moveImageUp = this.moveImageUp.bind(this)
        this.moveImageDown = this.moveImageDown.bind(this)
        this.addImages = this.addImages.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.formIsComplete = this.formIsComplete.bind(this)
        this.onImageAltChange = this.onImageAltChange.bind(this)
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

    moveImageDown(i){
        if(i ==  this.state.images.length)
            return
        const newArray = this.state.images
        this.swapArrayElements(newArray, i, ++i)
        this.setState({images: newArray})
    }

    onImageAltChange(e, i){
        const images = this.state.images
        images[i].alt = e.target.value
        this.setState({images: images})

    }

    moveImageUp(i){
        if(i==0)
            return
        const newArray = this.state.images
        this.swapArrayElements(newArray, i, --i)
        this.setState({images: newArray})
    }

    swapArrayElements(a, x, y) {
        if (a.length === 1) return a;
        a.splice(y, 1, a.splice(x, 1, a[y])[0]);
        return a;
    };

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

    submitForm(e){
        e.preventDefault()
        if(this.formIsComplete()){
            axios.post(config.serverUrl + 'private/cities', this.state)
                .then(res=>{
                    console.log('res')
                })
                .catch(err=>{
                    console.log('err')
                })


        }else{
            toast.error("Συμπληρώστε ολα τα απαραίτητα πεδια", {position: toast.POSITION.BOTTOM_RIGHT});
        }
    }

    formIsComplete(){
        let formComplete = true
        if(this.state.name === '' || this.state.description === '' || this.state.history === '' || this.state.tags === ''){

            formComplete = false
        }
        this.state.images.map(img=>{
            if(img.alt === ''){
                formComplete = false
            }
        })
        this.state.activities.map(act=>{
            if(act.name === '' || act.description === ''){
                formComplete = false
            }
        })
        return formComplete
    }

    addActivity(){
        this.setState({
            activities: [...this.state.activities, {name: '', description: ''}]
        })
    }

     addImages(images){
         const imagesToAdd = images.map(img=>{
             return {url: img.url, alt: ''}
         })
         this.setState({images: [...this.state.images, ...imagesToAdd]})
         console.log(this.state.images);
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
                                            <h5>Επίλογη είκονων</h5>
                                            {
                                                this.state.name.length > 0
                                                && <FileBrowser folderPath={this.state.name} addFiles={this.addImages} />
                                            }
                                            <div className={'my-5'}>
                                                {
                                                    this.state.images.map((img, i)=>{
                                                        const imgSrc = config.serverUrl + img.url
                                                        return(
                                                            <div className=' mb-3'>
                                                                <div>
                                                                    <div className='d-inline'>
                                                                        <div className='position-absolute text-danger bg-dark'>
                                                                            <span onClick={()=>{this.moveImageUp(i)}} className='city-edit-img-icon mr-2'><FaArrowUp /></span>
                                                                            <span onClick={()=>{this.moveImageDown(i)}} className='city-edit-img-icon mr-2'><FaArrowDown /></span>
                                                                            <span onClick={()=>{this.setState({images: this.state.images.filter((img, ind)=>{return ind!=i})})}} className='city-edit-img-icon mr-2'><FaMinus /></span>
                                                                        </div>
                                                                        <img src={imgSrc} className='img-fluid city-edit-img' alt=""/>
                                                                    </div>
                                                                    <div>
                                                                        <input value={this.state.images[i].alt} onChange={(e)=>{this.onImageAltChange(e, i)}} placeholder='Περιγραφή εικόνας' type="text"/>
                                                                    </div>
                                                                </div>
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
                                        <button onClick={this.submitForm} className='btn btn-primary btn-block mt-4'>Αποθήκευση</button>
                                </form>
                        </div>
                </div>
            </div>
        );
    }
}

export default EditCity;