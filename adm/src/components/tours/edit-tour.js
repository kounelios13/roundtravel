import React, {Component} from 'react';
import ReactTags from 'react-tag-autocomplete'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {FaPlus} from "react-icons/all";


class EditTour extends Component {

    constructor(props) {
        super(props);
        this.state = {
            earlyBookingDate: new Date(),
            earlyBookingEnabled: false,
            departureDates: [new Date()],
            recurringDepartures: {
                enabled: false,
                startingDate: new Date(),
                endingDate: new Date(),
                days: {
                    mon: false,
                    tue: false,
                    wed: false,
                    thu: false,
                    fri: false,
                    sat: false,
                    sun: false
                }
            },
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

    handleEarlyBookingDateChange = date => {
        this.setState({
            earlyBookingDate: date
        });
    };

    handleDepartureDateChange = (date, i) =>{
        const dates = this.state.departureDates
        dates[i] = date
        this.setState({departureDates: dates})
    }

    addDepartureDate = () => {
        const dates = this.state.departureDates
        dates.push(new Date())
        this.setState({departureDates: dates})
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
        let today = new Date()
        today = today.toLocaleDateString()

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
                            <label htmlFor="lat">Τιμή</label><br/>
                            <input name='lat' value={this.state.lat} onChange={this.handleChange} className={this.state.earlyBookingEnabled ? 'w-75' : 'w-100'} placeholder='Τιμή' type="text"/>
                            <input name='lon' value={this.state.lon} onChange={this.handleChange} className={'w-25'} placeholder='Early booking τιμή' type="text"  style={{display: this.state.earlyBookingEnabled ? 'inline-block' : 'none'}} />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" onChange={()=>{this.setState({earlyBookingEnabled: !this.state.earlyBookingEnabled})}} defaultChecked={this.state.earlyBookingEnabled} id="earlyBookingEnabled"></input>
                                    <label className="form-check-label" htmlFor="earlyBookingEnabled">
                                        Ενεργοποιηση Early booking
                                    </label>
                            </div>
                            <div className='mt-2' style={{display: this.state.earlyBookingEnabled ? 'block' : 'none'}}>
                                <label style={{color: this.state.earlyBookingDate.toLocaleDateString() === today ? 'pink' : 'white'}} htmlFor="lat">Ημ. Λήξης early booking</label><br/>
                                <DatePicker
                                    selected={this.state.earlyBookingDate}
                                    onChange={this.handleEarlyBookingDateChange}
                                />
                            </div>
                        </div>


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
                                handleAddition={this.handleAddition.bind(this)}
                            />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="name">Τροπος αναχωηρης</label>
                            <select className="custom-select">
                                <option value="1">Αεροπορικως</option>
                                <option value="2">Οδικως</option>
                                <option value="3">Αεροπορικως & Οδικως</option>
                            </select>
                        </div>

                        <div className='mt-3 mb-5'>
                            <label htmlFor="name">Καταλληλο για</label>
                            <select className="custom-select">
                                <option value="1">Ολους</option>
                                <option value="2">Νεαρους</option>
                                <option value="2">Μεσιληκες</option>
                                <option value="2">Ηλικιομενους</option>
                                <option value="3">Ατομα με καλη φυσικη κατασταση</option>
                            </select>
                        </div>

                        <h4 className='d-inline'>Αναχωρησεις</h4><span className='text-danger' onClick={this.addDepartureDate}><FaPlus /></span>
                        <hr/>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" onChange={()=>{this.setState({earlyBookingEnabled: !this.state.earlyBookingEnabled})}} defaultChecked={this.state.earlyBookingEnabled} id="earlyBookingEnabled"></input>
                            <label className="form-check-label" htmlFor="earlyBookingEnabled">Επαναλαμβανομενη αναχωρηση</label>

                        </div>

                        {
                            this.state.departureDates.map((dt,i)=>{
                                return (
                                    <div className='mt-3'>
                                        <label className='d-block' htmlFor="name">Ημερομηνια {i + 1}</label>
                                        <DatePicker
                                            selected={this.state.departureDates[i]}
                                            onChange={(date) => this.handleDepartureDateChange(date, i)}
                                        />
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
        );
    }
}

export default EditTour;