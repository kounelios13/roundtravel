import React, {Component} from 'react';
import addBtn from '../../assets/images/add-btn.svg'

class AddCity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cityName: '',
            historyData: '',
            activities: [
                {activityName: '', activityDescription: ''}
            ]
        }
        this.addActivity = this.addActivity.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    addActivity(){
        this.setState({activities: [...this.state.activities, {activityName: '', activityDescription: ''}]})
    }


    render() {
        return (
            <div className='add-city col-8 offset-2 mt-5'>
                <div className='text-center'>
                    <h3 className={'text-uppercase'}>Προσθηκη πολης</h3>
                    <form action="" className='mt-5'>
                        <div>
                            <label className='mr-2'>Ονομα πολης: </label>
                            <input name='cityName' value={this.state.cityName} onChange={this.handleChange} type="text"/>
                        </div>
                        <div>
                            <label className='mr-2'>Ιστορικά δεδομενα</label>
                            <textarea name='historyData' onChange={this.handleChange} value={this.state.historyData} id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            {this.state.activities.map((activity, i)=>{
                                return (
                                    <div>
                                        <div>
                                            <label htmlFor="">Όνομα δραστηριότητας</label>
                                            <input name={'activityName'} value={this.state.activities[i].activityName} onChange={this.handleChange} type="text"/>
                                        </div>
                                        <div>
                                            <label htmlFor="">Περιγραφη δραστηριοτητας</label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                            )
                            })}
                        </div>
                        <img onClick={this.addActivity} src={addBtn} className='add-btn' alt=""/>

                    </form>
                </div>
            </div>
        );
    }
}

export default AddCity;