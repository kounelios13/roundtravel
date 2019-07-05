import React, {Component} from 'react';


class ImageHeader extends Component {
    render() {
        return (
            <div className="row p-0 m-0">
                <div className='image-header-container col-12 p-0 m-0'>
                    <div className='image-header-image' ref={this.imageDiv}>
                            <div className="image-header-text">
                                <h1 className='display-4'>Εκδρομη στο Παρισι</h1>
                                <h2>Εκδρομες και εισητηρια για την πολη του φωτος</h2>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageHeader;