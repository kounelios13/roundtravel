import React, {Component} from 'react';
import {toast} from "react-toastify";
import axios from "axios";
import PropTypes from "prop-types";

class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.uploadInput = React.createRef()
        this.handleImageSubmit = this.handleImageSubmit.bind(this)

    }


    handleImageSubmit(e){
        e.preventDefault()
        if(this.props.path === '' || this.props.path === 'undefined'){
            toast.error("Το όνομα της πόλης είναι απαραίτητο", {position: toast.POSITION.BOTTOM_RIGHT});
            return
        }

        let data = new FormData()
        const files = Array.from(this.uploadInput.current.files)

        files.forEach((file,i)=>{
            data.append(i, file)
        })
        data.append('type', this.props.mode)


        axios
            .post('http://localhost:9000/private/upload', data)
            .then((res)=>{
                toast.success('Η μεταφόρτωση ηταν επιτύχης', {position: toast.POSITION.BOTTOM_RIGHT})
            })
            .catch(err=>{
                toast.error('Η μεταφόρτωση ηταν ανεπιτυχής', {position: toast.POSITION.BOTTOM_RIGHT});
            })
    }

    render() {
        return (
            <div>
                <label className="btn btn-primary">
                    <i className="fa fa-image"></i> Ανεβασμα εικονων<input ref={this.uploadInput} type='file'  onChange={this.handleImageSubmit} name='image' className='w-100 d-none' multiple  />
                </label>
            </div>
        );
    }
}

FileUpload.propTypes = {
    mode: PropTypes.string.isRequired
}

export default FileUpload;