import React, {Component} from 'react';
import {FaQuestion} from "react-icons/fa";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            url: ''
        }
    }


    render() {
        return (
            <div>
                <div className='col-8 offset-2 mt-5'>
                    <div className='col-6 offset-3 p-5 bg-info bg-form'>
                        <form>
                            <h4>Πληροφορίες κατηγορίας</h4>
                            <hr/>
                            <div className='mt-3'>
                                <label htmlFor="name">Όνομα πόλης</label>
                                <input name='name' value={this.state.name} className={'w-100'} type="text" onChange={this.handleChange} />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="url">URL</label><p className='d-inline bg-primary rounded ml-2' data-tip="hello world"><FaQuestion /></p>
                                <input name='url' value={this.state.url} onChange={this.handleChange} className={'w-100'} type="text"/>
                            </div>




                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;