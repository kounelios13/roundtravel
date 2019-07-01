import React, {Component} from 'react';

class EditLocation extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name: '',
            description: '',
            img: '',

        }
    }


    render() {
        return (
            <div>
                <div className='col-8 offset-2 mt-5'>
                    <div className='col-6 offset-3 p-5 bg-info bg-form'>
                        <form action="">
                            <div className='mt-3'>
                                <label htmlFor="name">Όνομα προορισμου</label>
                                <input name='name' value={this.state.name} className={'w-100'} type="text" onChange={this.handleChange} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditLocation;