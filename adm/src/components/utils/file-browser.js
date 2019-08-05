import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";
import axios from 'axios'
import config from '../../config/config'
import {toast} from "react-toastify";


class FileBrowser extends Component {

    constructor(props, context) {
        super(props, context);

        this.getDirectoryData = this.getDirectoryData.bind(this)
        this.toogleSelected = this.toogleSelected.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            show: false,
            files: [],
            query: '',
            fileIndex: 0,
            filesPerIndex: 6
        };



        this.handleShow = () => {
            this.setState({ show: true });
            this.getDirectoryData()
        };

        this.handleHide = () => {
            this.setState({ show: false });
            if(this.state.files.length > 0){
                const selectedFiles = this.state.files.filter((file)=>{
                    return file.selected !== false
                })
                this.props.addFiles(selectedFiles)
                this.setState({files: []})
            }
        };
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }



    getDirectoryData(e){

        if(typeof e !== 'undefined'){
            if(e.keyCode === 13){
                axios
                    .post(config.serverUrl + 'private/browse', {type: '.jpeg|.jpg|.gif|.png', dir: 'images', query: this.state.query})
                    .then((res)=>{
                        const files = res.data.files.map(file=>{
                            return {selected: false, url: file}
                        })
                        this.setState({files: files})
                    }).catch(err=>{
                    console.log(err)
                })
            }
        }else{
            axios
                .post(config.serverUrl + 'private/browse', {type: '.jpeg|.jpg|.gif|.png', dir: 'images'})
                .then((res)=>{
                    const files = res.data.files.map(file=>{
                        return {selected: false, url: file}
                    })
                    this.setState({files: files})
                }).catch(err=>{
            })
        }


    }

    toogleSelected(i){
        console.log(i)
        const file = this.state.files[i]
        file.selected = !file.selected
        const files = this.state.files
        files[i] = file

        this.setState({files: files})
    }

    isImage(fileName){
        const ext = fileName.split('.')[1]
        return ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif' || false
    }

    deleteFile(fileName, type){
        console.log(fileName)
        axios
            .post(config.serverUrl + 'private/browse/delete', {type: type, fileName: fileName})
            .then(res=>{
                if(res.data.success){
                    toast.success('Η διαγραφή του αρχείου ηταν επιτύχης', {position: toast.POSITION.BOTTOM_RIGHT})
                    this.getDirectoryData()
                    this.setState({fileIndex: 0})
                }else{
                    toast.error("Κατι πηγε στραβα", {position: toast.POSITION.BOTTOM_RIGHT});
                }
            })
    }

    fileNameEdited(prevName, newName, type){
        console.log(prevName)
        console.log(newName)
        if(prevName !== newName){
            axios
                .post(config.serverUrl + 'private/browse/rename', {type: type, prevName: prevName, newName: newName})
                .then(res=>{
                    if(res.data.success) {
                        toast.success('Η αλλαγη ονοματος του αρχείου ηταν επιτύχης', {position: toast.POSITION.BOTTOM_RIGHT})
                        this.getDirectoryData()
                        this.setState({fileIndex: 0})
                    }else{
                        toast.error("Κατι πηγε στραβα", {position: toast.POSITION.BOTTOM_RIGHT});
                    }
                })
        }
    }


    render() {
        const totalPages = Math.ceil(this.state.files.length / this.state.filesPerIndex)
        const files = this.state.files
        const startingIndex = this.state.fileIndex * this.state.filesPerIndex
        const endingIndex = (this.state.fileIndex +1) * this.state.filesPerIndex
        const arr = files.slice(startingIndex, endingIndex)

        console.log(this.state.files)
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Επιλογή αρχείων
                </Button>

                <Modal show={this.state.show} onHide={this.handleHide} dialogClassName="modal-100w" className='file-browser' size={'xl'} >
                    <Modal.Header closeButton>
                        <Modal.Title className="file-browser-title"> Επιλογή αρχείων </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='file-browser-body'>
                        <div className='col-12 d-flex flex-wrap'>
                            <input placeholder={'Αναζητηση αρχειου'} className='col-12' name='query' onKeyUp={this.getDirectoryData} onChange={this.handleChange} value={this.state.query} type="text"/>
                            {
                                arr.map((file, i)=>{
                                    const selectedClass = file.selected ? 'file-browser-image-selected' : ''
                                    const split = file.url.split('/')
                                    const fileName = split[split.length -1]
                                    const isImage = this.isImage(fileName)


                                    return (
                                        isImage &&
                                        <div key={i} className="col-2 py-2" onClick={()=>{this.toogleSelected(startingIndex + i)}} key={startingIndex + i}>
                                            <div className='position-relative'>
                                                <div onClick={()=>{this.deleteFile(fileName, 'image')}} className="position-absolute file-browser-delete bg-info app-pointer">
                                                    X
                                                </div>
                                                <img className={'img-fluid img-fit file-browser-image ' + selectedClass} src={`${config.imagesUrl}${fileName}`} alt=""/>
                                            </div>
                                            <div onBlur={(e)=>{this.fileNameEdited(fileName, e.currentTarget.textContent, 'image')}} contentEditable suppressContentEditableWarning={true}>
                                                {fileName}
                                            </div>

                                        </div>
                                    )
                                })
                            }
                            <div className="col-12 ">
                                <div className="float-right">
                                    {
                                        Array.from(Array(totalPages).keys()).map(i=>{
                                            let additionalClass = i === this.state.fileIndex ? 'pagination-button-selected' : ''
                                            return (
                                                <div key={i} onClick={()=>{this.setState({fileIndex: i})}} className={`d-inline pagination-button ${additionalClass}`}>
                                                    {i + 1}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}



export default FileBrowser;