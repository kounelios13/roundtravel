import React, {Component} from 'react';
import axios from 'axios'
import {FaQuestion} from "react-icons/fa";
import {toast} from "react-toastify";
import config from '../../config/config'

class EditCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            continent: '',
            tags: '',
            url: '',
            continents: []
        }

        this.onSelectChange = this.onSelectChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.deleteCountry = this.deleteCountry.bind(this)
    }

    submitForm(e){
        e.preventDefault()
        axios
            .post(config.serverUrl + 'private/countries', this.state)
            .then(res=>{
                toast.success("Η χώρα αποθηκευτηκε επιτυχώς", {position: toast.POSITION.BOTTOM_RIGHT});
                this.props.history.push('/countries')
            })
            .catch(err=>{
                console.log(err)
            })
    }

    deleteCountry(e){
        e.preventDefault()
        axios
            .post(config.serverUrl + 'private/countries/delete', {_id: this.state._id})
            .then(res=>{
                toast.success('Η χώρα διεγράφη επιτυχώς', {position: toast.POSITION.BOTTOM_RIGHT})
                this.props.history.push('/countries')
            })
            .catch(err=>{
                toast.error('Υπήρξε κάποιο προβλημα κατα την διαγραφή της πόλης', {position: toast.POSITION.BOTTOM_RIGHT})
            })
    }

    componentWillMount(){
        if(this.props.match.params.id === 'new'){
            axios
                .get(config.serverUrl + 'continents')
                .then(res=>{
                    this.setState({continents: res.data, continent: res.data[0]._id}, ()=>{
                        console.log(this.state.continents)
                    })
                })
                .catch(err=>{
                    console.log(err)
                })
        }else{
            axios
                .post(config.serverUrl + 'private/countries/get', {_id: this.props.match.params.id})
                .then(res=>{
                    this.setState({...res.data}, ()=>{
                        axios.get(config.serverUrl + 'continents')
                            .then(res=>{
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
                .catch(err=>{
                    toast.error('Η λήψη των δεδομένων της χώρας απέτυχε.', {position: toast.POSITION.BOTTOM_RIGHT})
                })
        }

    }

    onSelectChange(e){
        this.setState({continent: e.target.value})
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        return (
            <div>
                <div className='col-8 offset-3 mt-5'>
                    <div className='col-6 offset-3 m-5 bg-info bg-form'>
                        <form>
                            <h4>Πληροφορίες χώρας</h4>
                            <hr/>

                            <div className='mt-3'>
                                <label htmlFor="name">Ονομα χώρας</label>
                                <input name='name' value={this.state.name} className={'w-100'} type="text" onChange={this.handleChange} />
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
                                <label htmlFor="url">URL</label><p className='d-inline bg-primary rounded ml-2' data-tip="hello world"><FaQuestion /></p>
                                <input name='url' value={this.state.url} onChange={this.handleChange} className={'w-100'} type="text"/>
                            </div>

                            <div className='mt-3 mb-5'>
                                <label htmlFor="tags">Tags</label>
                                <input name='tags' value={this.state.tags} onChange={this.handleChange} className={'w-100'} type="text"/>
                            </div>
                            <button onClick={this.submitForm} className='btn btn-primary w-75 mt-4'>Αποθήκευση</button><button onClick={this.deleteCountry} className='btn btn-danger w-25 mt-4'>Διαγραφή</button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditCountry;