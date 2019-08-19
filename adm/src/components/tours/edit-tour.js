import React, {Component} from 'react';

class EditTour extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }


    render() {
        return (
            <div>
                <div className='col-8 offset-2 mt-5'>
                    <div className='col-8 offset-2 p-5 bg-info bg-form'>
                        <h4>Γενικές πληροφορίες</h4>
                        <hr/>

                        <div className='mt-3'>
                            <label htmlFor="name">Όνομα εκδρομης</label>
                            <input name='name'  value={this.state.name} className={'w-100'} type="text" onChange={this.handleChange} />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default EditTour;