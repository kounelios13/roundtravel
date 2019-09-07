import React, {Component} from 'react';
import {FaArrowDown, FaArrowUp, FaMinus, FaPlus, FaQuestion} from "react-icons/fa";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../config/config'
import FileBrowser from "../utils/file-browser";
import ReactTooltip from 'react-tooltip'
import setAuthToken from "../../utils/set-auth-token";


class EditCity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pageTitle: '',
            pageSubtitle: '',
            suggestedTitle: '',
            suggestedSubtitle: '',
            descriptionTitle: '',
            description: '',
            descriptionImage: '',
            tags: '',
            lat: '',
            lon: '',
            url: '',
            visibleInMap: true,
            metaTitle: '',
            metaDescription: '',
            descriptionImageX: '50%',
            descriptionImageY: '50%',
            metaImage: '',
            sightsTitle: '',
            sightsSubtitle: '',
            sights: [],
            infoTitle: '',
            infoSubtitle: '',
            information: [],
            images: [],
            continent: '',
            continents: []
        }

        this.addInformationTab = this.addInformationTab.bind(this)
        this.deleteInformation = this.deleteInformation.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleInformationChange = this.handleInformationChange.bind(this)
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
        this.addContentEntry = this.addContentEntry.bind(this)
        this.addMetaImage = this.addMetaImage.bind(this)
        this.addSight = this.addSight.bind(this)
        this.addSightImage = this.addSightImage.bind(this)
        this.handleSightNameChange = this.handleSightNameChange.bind(this)
        this.removeSight = this.removeSight.bind(this)
        this.updateSightImageAlt = this.updateSightImageAlt.bind(this)
        this.addDescriptionImage = this.addDescriptionImage.bind(this)
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

    addContentEntry(i){
        const information = this.state.information
        information[i].content.push({name: '', text: ''})
        this.setState({information: information})
    }



    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    addSightImage(images, i){
        console.log(i)
        if(images.length < 0){
            return
        }

        const sights = this.state.sights
        sights[i].photoUrl = images[0].url
        this.setState({sights: sights})
    }

    deleteInformation(i){
        let information = this.state.information.filter((item, ind)=>{
            return ind !== i
        })
        this.setState({information: information})
    }

    addImage(){
        this.setState({images: [...this.state.images, {url: '', alt: ''}]})
    }

    updateSightImageAlt(e){
        const i = parseInt(e.target.name.split('-')[1])
        let sights = this.state.sights
        sights[i].alt = e.target.value
        this.setState({sights: sights})
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

    handleInformationChange(e, j){
        let field = e.target.name.split('-')[1]
        let index = e.target.name.split('-')[2]
        let jIndex = e.target.name.split('-')[3]
        let information = this.state.information


        if(field === 'title'){
            information[index].title = e.target.value
            this.setState({information: information})
        }

        if(field === 'name'){
            console.log(jIndex)
            information[index].content[jIndex].name = e.target.value
            this.setState({information: information})
        }

        if(field === 'description'){
            console.log(jIndex)
            information[index].content[jIndex].text = e.target.value
            this.setState({information: information})
        }
        console.log(this.state)
    }

    submitForm(e){
        e.preventDefault()
        console.log(this.state)
        if(this.formIsComplete()){
            axios.post(config.serverUrl + 'private/cities', this.state)
                .then(res=>{
                    if(res.data._id){
                        toast.success("Η πόλη αποθηκέυτηκε επιτυχώς.", {position: toast.POSITION.BOTTOM_RIGHT});
                        this.props.history.push('/cities')
                    }
                })
                .catch(err=>{
                    toast.error("Κατι πηγε στραβα", {position: toast.POSITION.BOTTOM_RIGHT});
                    console.log(err)
                })
        }else{
            toast.error("Συμπληρώστε ολα τα απαραίτητα πεδια", {position: toast.POSITION.BOTTOM_RIGHT});
        }
    }

    formIsComplete(){
        let formComplete = true
        if(this.state.name === '' || this.state.description === '' || this.state.history === '' || this.state.tags === '' || this.state.url === '' || this.state.lat === '' || this.state.lon === '' || this.state.metaTitle === '' || this.state.metaDescription === '' || this.state.pageTitle === '' || this.state.pageSubtitle === '' || this.state.suggestedTitle === '' || this.state.suggestedSubtitle === '' ){
            formComplete = false
        }

        this.state.sights.map(sight=>{
            if(sight.name === '' || sight.description === '' || sight.photoUrl === '' || sight.alt === ''){
                formComplete = false
            }
        })

        this.state.information.map(info=>{
            if(info.title === ''){
                formComplete = false
            }
            info.content.map(section=>{
                if(section.name === '' || section.text === ''){
                    formComplete = false;
                }
            })
        })

        this.state.images.forEach(img=>{
            if(img.alt === ''){
                formComplete = false
            }
        })

        if(this.state.images.length === 0){
            toast.error("Πρέπει να υπάρχει τουλάχιστον μια είκονα", {position: toast.POSITION.BOTTOM_RIGHT});
            formComplete = false
        }

        this.state.information.forEach(act=>{
            if(act.name === '' || act.description === ''){
                formComplete = false
            }
        })
        return formComplete
    }

    addInformationTab(){
        this.setState({
            information: [...this.state.information, {title: '', content: [{name: '', text: ''}]}]
        })
    }

    addSight(){
        this.setState({sights: [...this.state.sights, {name: '', description: '', photoUrl: '', alt: ''}]})
    }

    addMetaImage(images){
        // console.log(images[0].url)
        // this.setState({metaImage: images[0].url})
    }

     addImages(images){
         const imagesToAdd = images.map(img=>{
             return {url: img.url, alt: ''}
         })
         this.setState({images: [...this.state.images, ...imagesToAdd]})
     }

    handleSightNameChange(e){
        const sights = this.state.sights

        const i = parseInt(e.target.name.split('-')[2])

        if(e.target.name.includes('name')){
            console.log(i)
            sights[i].name = e.target.value
            this.setState({sights: sights})
        }

        if(e.target.name.includes('description')){
            console.log(i)
            sights[i].description = e.target.value
            this.setState({sights: sights})
        }

    }

    removeSight(i){
        let sights = this.state.sights
        sights = sights.filter((sight,i)=>{
            return i !== i
        })
        this.setState({sights: sights})
    }

     onSelectChange(e){
        this.setState({continent: e.target.value})
     }

     fetchGeolocationData(){
         delete axios.defaults.headers.common["Authorization"];
         axios.
            post('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.name + '&key=' + config.googleApiKey)
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

    addDescriptionImage(images) {
        if(!images.length > 0){
            return
        }
        this.setState({descriptionImage: images[0].url}, ()=>{
            console.log(this.state.descriptionImage)
        })
    }

    render() {
        return (
            <div>
                <ReactTooltip />
                <div className='col-8 offset-2 mt-5'>
                                <div className='col-8 offset-2 p-5 bg-secondary bg-form'>
                                    <form>
                                        <h4>Γενικές πληροφορίες</h4>
                                        <hr/>

                                        <div className='mt-3'>
                                            <label htmlFor="name">Όνομα πόλης</label>
                                            <input name='name' onBlur={this.fetchGeolocationData} value={this.state.name} className={'w-100'} type="text" onChange={this.handleChange} />
                                        </div>

                                        <div className='mt-3'>
                                            <label htmlFor="name">Τιτλος σελιδας</label>
                                            <input name='pageTitle' value={this.state.pageTitle} className={'w-100'} type="text" onChange={this.handleChange} />
                                        </div>

                                        <div className='mt-3 mb-5'>
                                            <label htmlFor="pageSubtitle">Υποτιτλος σελιδας</label>
                                            <input name='pageSubtitle' value={this.state.pageSubtitle} className={'w-100'} type="text" onChange={this.handleChange} />
                                        </div>



                                        <h4>Περιγραφη πολης</h4>
                                        <hr/>

                                        <div className='mt-3'>
                                            <label htmlFor="name">Τιτλος περιγραφης πολης</label>
                                            <input name='descriptionTitle' value={this.state.descriptionTitle} className={'w-100'} type="text" onChange={this.handleChange} />
                                        </div>

                                        <div className='mt-3'>
                                            <label htmlFor="description">Περιγραφή πόλης</label>
                                            <textarea name='description' value={this.state.description} onChange={this.handleChange} className='w-100' rows="4" cols="50"></textarea>
                                        </div>

                                        <div className='mt-3 mb-5'>
                                            {
                                                this.state.descriptionImage !== '' &&
                                                <div>
                                                    <span onClick={()=>{this.setState({descriptionImage: ''})}} className='position-absolute z-index-5000 bg-info ml-3 p-1'><FaMinus/></span>
                                                    <img src={`${config.imagesUrl}${this.state.descriptionImage}`} className='col-12 p-0 m-0' alt=""/>
                                                    <input name={'descriptionImageX'} value={this.state.descriptionImageX} onChange={this.handleChange} type="text" className="col-6"/>
                                                    <input name={'descriptionImageY'} value={this.state.descriptionImageY} onChange={this.handleChange} type="text" className="col-6"/>
                                                </div>
                                            }
                                            {
                                                this.state.descriptionImage === '' &&
                                                <FileBrowser mode={'images'} filesSelected={this.addDescriptionImage} />
                                            }

                                        </div>

                                        <h4>Προτινομενα</h4>
                                        <hr/>

                                        <div className='mt-3'>
                                            <label htmlFor="name">Τιτλος προτινομενων</label>
                                            <input name='suggestedTitle' value={this.state.suggestedTitle} className={'w-100'} type="text" onChange={this.handleChange} />
                                        </div>

                                        <div className='mt-3 mb-5'>
                                            <label htmlFor="name">Υποτιτλος προτινομενων</label>
                                            <input name='suggestedSubtitle' value={this.state.suggestedSubtitle} className={'w-100'} type="text" onChange={this.handleChange} />
                                        </div>


                                        <h4>Λοιπα στοιχεια</h4>
                                        <hr/>

                                        <div className='mt-3'>
                                            <label htmlFor="url">URL</label><p className='d-inline bg-info rounded ml-2' data-tip="hello world"><FaQuestion /></p>
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

                                        <h4>Meta πληροφοριες</h4>
                                        <hr/>
                                        <div className='mt-3'>
                                            <label htmlFor="metaTitle">Meta Τιτλος</label>
                                            <input name='metaTitle' value={this.state.metaTitle} onChange={this.handleChange} className={'w-100'} type="text"/>
                                        </div>
                                        <div className='mt-3'>
                                            <label htmlFor="metaDescription">Meta Περιγραφη</label>
                                            <input name='metaDescription' value={this.state.metaDescription} onChange={this.handleChange} className={'w-100'} type="text"/>
                                        </div>
                                        <br/>



                                        <div className='pb-5 pt-5'>
                                            <h4 className='d-inline'>Είκονες πόλης</h4>
                                            <hr/>
                                            <h5>Επίλογη είκονων</h5>
                                            {
                                                this.state.name.length > 0
                                                && <FileBrowser  mode={'images'} filesSelected={this.addImages}  />
                                            }
                                            <div className={'my-5'}>
                                                {
                                                    this.state.images.map((img, i)=>{
                                                        const imgSrc = config.imagesUrl + img.url
                                                        {console.log(this.state)}
                                                        return(
                                                            <div className=' mb-3' key={i}>
                                                                <div>
                                                                    <div className='d-inline'>
                                                                        <div className="d-flex flex-wrap">
                                                                            <div className='text-info bg-secondary col-12'>
                                                                                <span onClick={()=>{this.moveImageUp(i)}} className='city-edit-img-icon mr-2'><FaArrowUp /></span>
                                                                                <span onClick={()=>{this.moveImageDown(i)}} className='city-edit-img-icon mr-2'><FaArrowDown /></span>
                                                                                <span onClick={()=>{this.setState({images: this.state.images.filter((img, ind)=>{return ind!==i})})}} className='city-edit-img-icon mr-2'><FaMinus /></span>
                                                                            </div>
                                                                            <div className="col-12 p-0 m-0">
                                                                                <img src={imgSrc} className='img-fluid city-edit-img col-12 p-0 m-0' alt=""/>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <input className='col-12' value={this.state.images[i].alt} onChange={(e)=>{this.onImageAltChange(e, i)}} placeholder='Περιγραφή εικfileόνας' type="text"/>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>


                                        <h3 className='d-inline'>Αξιοθεατα</h3> <span className='text-success' onClick={this.addSight}><FaPlus /></span>
                                        <hr/>

                                        <div className='mt-3'>
                                            <label htmlFor="sightsTitle">Τιτλος αξιοθεταων</label>
                                            <input name='sightsTitle' value={this.state.sightsTitle} onChange={this.handleChange} className={'w-100'} type="text"/>
                                        </div>

                                        <div className='mt-3'>
                                            <label htmlFor="sightsSubtitle">Υποτιτλος αξιοθεταων</label>
                                            <input name='sightsSubtitle' value={this.state.sightsSubtitle} onChange={this.handleChange} className={'w-100'} type="text"/>
                                        </div>

                                        <div className="pb-5 mt-3">
                                            {
                                                this.state.sights.map((sight, i)=>{
                                                    return (
                                                        <div key={i} className={'pb-4'}>
                                                            <label htmlFor="sight-name">Όνομα αξιοθεατου</label><span className={'text-danger'} onClick={()=>{this.removeSight(i)}}><FaMinus /></span>
                                                            <input value={this.state.sights[i].name} className={'w-100 mb-3'} type="text" name={`sight-name-${i}`} onChange={(i)=>{this.handleSightNameChange(i)}} />

                                                            <label htmlFor="sight-name">Περιγραφή αξιοθεατου</label>
                                                            <textarea value={this.state.sights[i].description} type="text" name={`sight-description-${i}`} className="w-100" rows="4"  onChange={(i)=>{this.handleSightNameChange(i)}}></textarea>
                                                            {
                                                                sight.photoUrl !== '' &&
                                                                <div>
                                                                    <img className='img-fluid' src={`${config.imagesUrl}${sight.photoUrl}`} alt=""/>
                                                                    <input name={'imgAlt-' + i} value={this.state.sights[i].alt} placeholder={'Περιγραφη εικονας'} onChange={(i)=>{this.updateSightImageAlt(i)}} className={'col-12'} type="text"/>
                                                                </div>
                                                            }
                                                            {
                                                                sight.photoUrl === '' &&
                                                                <div>
                                                                    <label htmlFor="sight-name">Επιλογη εικονας</label><br/>
                                                                    <FileBrowser i={i} mode={'images'} filesSelected={this.addSightImage}  />
                                                                </div>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                        <h3 className='d-inline'>Tabs πληροφοριων</h3> <span className='text-success' onClick={this.addInformationTab}><FaPlus /></span>
                                        <hr/>

                                        <div className='pb-4'>
                                            <div className='mt-3'>
                                                <label htmlFor="sightsSubtitle">Τιτλος ενοτητας πληροφοριων</label>
                                                <input name='infoTitle' value={this.state.infoTitle} onChange={this.handleChange} className={'w-100'} type="text"/>
                                            </div>
                                            <div className='mt-3'>
                                                <label htmlFor="sightsSubtitle">Υποτιτλος ενοτητας πληροφοριων</label>
                                                <input name='infoSubtitle' value={this.state.infoSubtitle} onChange={this.handleChange} className={'w-100'} type="text"/>
                                            </div>
                                            {
                                                this.state.information.map((activity, i)=>{
                                                    return (
                                                        <div className='mt-3 mb-3' key={i}>
                                                            <label className={'display-5'} htmlFor={'information-title-' + i}>Όνομα δεσμης</label> <span onClick={()=>{this.deleteInformation(i)}} className='text-danger'><FaMinus /></span>
                                                            <input name={'information-title-' + i} value={this.state.information[i].title} onChange={this.handleInformationChange} className={'w-100 mb-3'} type="text"/>
                                                            {
                                                                activity.content.map((entry, j)=>{

                                                                    return (
                                                                        <div key={j}>
                                                                            <label htmlFor={'information-name-' + i + '-' +  j}>Τίτλος πεδιου - Πεδιο</label> <span onClick={()=>{this.addContentEntry(i)}} className='text-success'><FaPlus /></span>
                                                                            <input name={'information-name-' + i + '-' +  j} value={this.state.information[i].content[j].name} onChange={this.handleInformationChange} className={'w-100 mb-3'} type="text"/>
                                                                            <label htmlFor={'information-description-' + i + '-' +  j}>Περιγραφη πεδιου</label>
                                                                            <textarea name={'information-description-' + i + '-' +  j} value={this.state.information[i].content[j].text} onChange={this.handleInformationChange} className="w-100" rows="4"></textarea>
                                                                        </div>
                                                                    )
                                                                })
                                                            }

                                                        </div>
                                                    )
                                                })
                                            }
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