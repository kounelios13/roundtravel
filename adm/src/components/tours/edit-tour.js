import React, {Component} from 'react';
import ReactTags from 'react-tag-autocomplete'

class EditTour extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tags: [
            ],
            suggestions: [
                { id: 3, name: "Ηρακλειο" },
                { id: 4, name: "Χανια" },
                { id: 5, name: "Αθηνα" },
                { id: 6, name: "Λαρνακα" }
            ]
        }
    }

    handleDelete (i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
    }

    handleAddition (tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags })
    }



    render() {
        return (
            <div>
                <div className='col-8 offset-2 mt-5'>
                    <div className='col-8 offset-2 p-5 bg-info bg-form'>
                        <h4>Γενικές πληροφορίες</h4>
                        <hr/>

                        <div className='mt-3'>
                            <label htmlFor="name">Τίτλος εκδρομής</label>
                            <input name='name'  value={this.state.name} className={'w-100'} type="text" onChange={this.handleChange} />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="name">Υπότιτλος εκδρομης</label>
                            <input name='name'  value={this.state.name} className={'w-100'} type="text" onChange={this.handleChange} />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="name">Εισαγωγικος τιτλος</label>
                            <input name='name'  value={this.state.name} className={'w-100'} type="text" onChange={this.handleChange} />
                        </div>

                        <div className='mt-3 mb-5'>
                            <label htmlFor="name">Εισαγωγικο κειμενο</label>
                            <input name='name'  value={this.state.name} className={'w-100'} type="text" onChange={this.handleChange} />
                        </div>

                        <h4>Με μια ματια</h4>
                        <hr/>

                        <div className='mt-3'>
                            <label htmlFor="name">Τίτλος</label>
                            <input name='name'  value={this.state.name} className={'w-100'} type="text" onChange={this.handleChange} />
                        </div>

                        <div className='mt-3 mb-5'>
                            <label htmlFor="name">Υπότιτλος</label>
                            <input name='name'  value={this.state.name} className={'w-100'} type="text" onChange={this.handleChange} />
                        </div>


                        <h4>Στοιχεια εκδρομης</h4>
                        <hr/>

                        <div className='mt-3'>
                            <label htmlFor="lat">Μερες/ Νυχτες</label><br/>
                            <input name='lat' value={this.state.lat} onChange={this.handleChange} className={'w-50'} placeholder='Μερες' type="text"/>
                            <input name='lon' value={this.state.lon} onChange={this.handleChange} className={'w-50'} placeholder='Νυχτες' type="text"/>
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="name">Αναχωρηση απο</label>
                            <ReactTags
                                placeholder='Προσθεστε αναχωρηση'
                                tags={this.state.tags}
                                suggestions={this.state.suggestions}
                                handleDelete={this.handleDelete.bind(this)}
                                handleAddition={this.handleAddition.bind(this)} />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="name">Τροπος αναχωηρης</label>
                            <select className="custom-select">
                                <option value="1">Αεροπορικως</option>
                                <option value="2">Οδικως</option>
                                <option value="3">Αεροπορικως & Οδικως</option>
                            </select>
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="name">Καταλληλο για</label>
                            <select className="custom-select">
                                <option value="1">Ολους</option>
                                <option value="2">Νεαρους</option>
                                <option value="2">Μεσιληκες</option>
                                <option value="2">Ηλικιομενους</option>
                                <option value="3">Ατομα με καλη φυσικη κατασταση</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default EditTour;