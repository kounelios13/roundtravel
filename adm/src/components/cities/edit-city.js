import React, {Component} from 'react';
import {FaArrowDown, FaArrowUp, FaMinus, FaPlus, FaQuestion} from "react-icons/fa";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileUpload from "../utils/file-upload";
import config from '../../config/config'
import FileBrowser from "../utils/file-browser";
import ReactTooltip from 'react-tooltip'
import {initAuthData} from "../../utils/init-auth-data";
import setAuthToken from "../../utils/set-auth-token";


class EditCity extends Component {



    constructor(props) {
        super(props);



        this.state = {
            name: '',
            description: '',
            history: '',
            tags: '',
            lat: '',
            lon: '',
            url: '',
            visibleInMap: true,
            activities: [],
            images: [],
            continent: '',
            continents: []
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
        this.deleteCity = this.deleteCity.bind(this)
        this.onSelectChange = this.onSelectChange.bind(this)
        this.fetchGeolocationData = this.fetchGeolocationData.bind(this)
    }

    deleteCity(e){
        e.preventDefault()
        if(this.state._id !== 'undefined'){
            axios
                .post(config.serverUrl + 'private/cities/delete', {_id: this.state._id})
                .then(res=>{
                    toast.success("Η πόλη διεγραφή επιτυχώς.", {position: toast.POSITION.BOTTOM_RIGHT});
                    this.props.history.push('/cities')

                })
                .catch(err=>{
                    toast.error("Υπήρξε κάποιο πρόβλημα κατα την διαγραφή της πόλης", {position: toast.POSITION.BOTTOM_RIGHT});
                })
        }
    }

    componentWillMount(){
        if(this.props.match.params.id !== 'new'){
            axios
                .post(config.serverUrl + 'private/cities/get', {_id: this.props.match.params.id})
                .then(res=>{
                this.setState({...res.data}, ()=>{
                    axios.get(config.serverUrl + 'continents')
                        .then(res=>{
                            console.log('else')
                            const continentsWithoutSelected = res.data.filter(cont=>{
                                return cont._id !== this.state.continent
                            })
                            const selectedContinent = res.data.filter(cont=>{
                                return cont._id === this.state.continent
                            })
                            const continents = [...selectedContinent, ...continentsWithoutSelected]
                            this.setState({continents: continents})
                        })
                })
            })
        }else if(this.props.match.params.id === 'new'){
            axios.get(config.serverUrl + 'continents')
                .then(res=>{
                    this.setState({continents: res.data, continent: res.data[0]._id})
                })
                .catch(err=>{

                })
        }



    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    deleteActivity(i){
        let activities = this.state.activities.filter((item, ind)=>{
            return ind !== i
        })

        this.setState({activities: activities})
    }

    addImage(){
        this.setState({images: [...this.state.images, {url: '', alt: ''}]})
    }

    moveImageDown(i){
        if(i ===  this.state.images.length)
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
        if(i===0)
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
                    if(res.data._id){
                        toast.success("Η πόλη αποθηκέυτηκε επιτυχώς.", {position: toast.POSITION.BOTTOM_RIGHT});
                        this.props.history.push('/cities')
                    }
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
        if(this.state.name === '' || this.state.description === '' || this.state.history === '' || this.state.tags === '' || this.state.url === '' || this.state.lat === '' || this.state.lon === ''){
            formComplete = false
        }
        this.state.images.forEach(img=>{
            if(img.alt === ''){
                formComplete = false
            }
        })

        if(this.state.images.length === 0){
            toast.error("Πρέπει να υπάρχει τουλάχιστον μια είκονα", {position: toast.POSITION.BOTTOM_RIGHT});
            formComplete = false
        }

        this.state.activities.forEach(act=>{
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
     }

     onSelectChange(e){
        this.setState({continent: e.target.value})
     }

     fetchGeolocationData(){
         delete axios.defaults.headers.common["Authorization"];
         axios.
            post('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.name + '&key=AIzaSyDqg3XehTDw4eYitJkooo81xmw1jmynVt8')
            .then(res=>{
                if(res.data.status === 'OK'){
                    this.setState({lat: res.data.results[0].geometry.location.lat, lon: res.data.results[0].geometry.location.lng}, ()=>{
                        toast.info("Τα πεδία lat, lon ανανεώθηκαν επιτυχώς.", {position: toast.POSITION.BOTTOM_RIGHT});
                    })
                }else if(res.data.status === 'ZERO_RESULTS'){
                    toast.warn("Τα πεδία lat, lon απέτυχαν να ανανεωθούν.", {position: toast.POSITION.BOTTOM_RIGHT});
                }
            })
         setAuthToken(localStorage.token)
     }

    render() {
        return (
            <div>
                <ReactTooltip />
                <div className='col-8 offset-2 mt-5'>
                                <div className='col-6 offset-3 p-5 bg-info bg-form'>
                                    <form>
                                        <h4>Γενικές πληροφορίες</h4>
                                        <hr/>

                                        <div className='mt-3'>
                                            <label htmlFor="name">Όνομα πόλης</label>
                                            <input name='name' onBlur={this.fetchGeolocationData} value={this.state.name} className={'w-100'} type="text" onChange={this.handleChange} />
                                        </div>
                                        
                                        <div className='mt-3'>
                                            <label htmlFor="description">Περιγραφή πόλης</label>
                                            <textarea name='description' value={this.state.description} onChange={this.handleChange} className='w-100' rows="4" cols="50"></textarea>
                                        </div>
                                        
                                        <div className='mt-3'>
                                            <label htmlFor="history">Ιστορικα δεδομένα</label>
                                            <textarea name="history" value={this.state.history} onChange={this.handleChange} className="w-100" rows="4"></textarea>
                                        </div>

                                        <div className='mt-3'>
                                            <label htmlFor="url">URL</label><p className='d-inline bg-primary rounded ml-2' data-tip="hello world"><FaQuestion /></p>
                                            <input name='url' value={this.state.url} onChange={this.handleChange} className={'w-100'} type="text"/>
                                        </div>

                                        <div className='mt-3'>
                                            <label htmlFor="continent">Ηπειρος</label>
                                            <select onChange={this.onSelectChange} className={'w-100 custom-select'}>
                                                {this.state.continents.map(cont=>{
                                                    return (
                                                        <option key={cont._id} value={cont._id}>{cont.name}</option>
                                                    )
                                                })}
                                            </select>

                                        </div>

                                        <div className='mt-3'>
                                            <label htmlFor="lat">Lat/ Lon</label><br/>
                                            <input name='lat' value={this.state.lat} onChange={this.handleChange} className={'w-50'} placeholder='lat' type="text"/>
                                            <input name='lon' value={this.state.lon} onChange={this.handleChange} className={'w-50'} placeholder='lon' type="text"/>
                                        </div>

                                        <div className="mt-3 col-6 ml-2">
                                            <input checked={this.state.visibleInMap} name='visibleInMap' value={this.state.visibleInMap} onChange={()=>{this.setState({visibleInMap: !this.state.visibleInMap})}} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label" htmlFor="visibleInMap">Εμφάνιση στον χάρτη</label>
                                        </div>

                                        <div className='mt-3 mb-5'>
                                            <label htmlFor="tags">Tags</label>
                                            <input name='tags' value={this.state.tags} onChange={this.handleChange} className={'w-100'} type="text"/>
                                        </div>



                                        <h3 className='d-inline'>Δραστηριοτητες</h3> <span className='text-danger' onClick={this.addActivity}><FaPlus /></span>
                                        <hr/>
                                        <div>
                                            {
                                                this.state.activities.map((activity,i)=>{
                                                    return (
                                                        <div className='mt-3 mb-3' key={i}>
                                                            <label htmlFor={'activity-name-' + i}>Όνομα δραστηριότητας</label> <span onClick={()=>{this.deleteActivity(i)}} className='text-danger'><FaMinus /></span>
                                                            <input name={'activity-name-' + i} value={this.state.activities[i].name} onChange={this.handleActivityChange} className={'w-100 mb-3'} type="text"/>
                                                            <label htmlFor="name">Περιγραφη δραστηριότητας</label>
                                                            <textarea name={'activity-description-' + i} value={this.state.activities[i].description} onChange={this.handleActivityChange} className="w-100" rows="4"></textarea>
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
                                                && <FileBrowser parentDir={'πολη'} folderPath={this.state.name} addFiles={this.addImages} />
                                            }
                                            <div className={'my-5'}>
                                                {
                                                    this.state.images.map((img, i)=>{
                                                        const imgSrc = config.serverUrl + img.url
                                                        return(
                                                            <div className=' mb-3' key={i}>
                                                                <div>
                                                                    <div className='d-inline'>
                                                                        <div className='position-absolute text-danger bg-dark'>
                                                                            <span onClick={()=>{this.moveImageUp(i)}} className='city-edit-img-icon mr-2'><FaArrowUp /></span>
                                                                            <span onClick={()=>{this.moveImageDown(i)}} className='city-edit-img-icon mr-2'><FaArrowDown /></span>
                                                                            <span onClick={()=>{this.setState({images: this.state.images.filter((img, ind)=>{return ind!==i})})}} className='city-edit-img-icon mr-2'><FaMinus /></span>
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

                                            <FileUpload parentDir={'πολη'} path={this.state.name} />
                                        </div>
                                        <button onClick={this.submitForm} className='btn btn-primary w-75 mt-4'>Αποθήκευση</button><button onClick={this.deleteCity} className='btn btn-danger w-25 mt-4'>Διαγραφή</button>

                                    </form>
                        </div>
                </div>
            </div>
        );
    }
}

export default EditCity;