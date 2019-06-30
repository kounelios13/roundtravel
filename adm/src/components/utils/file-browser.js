import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";
import axios from 'axios'
import config from '../../config/config'

class FileBrowser extends Component {

    constructor(props, context) {
        super(props, context);

        this.getDirectoryData = this.getDirectoryData.bind(this)
        this.toogleSelected = this.toogleSelected.bind(this)

        this.state = {
            show: false,
            files: [],
            selectedFiles: [1, 3]
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
            }
        };
    }

    getDirectoryData(){
        axios
            .post(config.serverUrl + 'private/browse', {folderPath: this.props.folderPath})
            .then((res)=>{
                const files = res.data.files.map(file=>{
                    return {selected: false, url: file}
                })
                this.setState({files: files})
            }).catch(err=>{
                console.log(err)
        })
    }

    toogleSelected(i){
        const el = this.state.files[i]
        el.selected = !el.selected
        const files = this.state.files
        files[i] = el

        this.setState({files: files})
    }


    render() {

        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Επιλογή αρχείων
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    dialogClassName="modal-100w"
                    className='file-browser'
                    size={'xl'}
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="file-browser-title">
                            Επιλογή αρχείων
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='file-browser-body'>
                        <div className='col-12 d-flex flex-wrap'>
                            {
                                this.state.files.map((file, i)=>{
                                    const selectedClass = this.state.files[i].selected ? 'file-browser-image-selected' : ''
                                    const split = file.url.split('/')
                                    const fileName = split[split.length -1]

                                    return (
                                        <div className="col-2 py-2" onClick={()=>{this.toogleSelected(i)}} key={i}>
                                            <img className={'img-fluid file-browser-image ' + selectedClass} src={config.serverUrl + file.url} alt=""/>
                                            <div>
                                                {fileName}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}



export default FileBrowser;