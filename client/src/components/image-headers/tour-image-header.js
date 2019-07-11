import React, {Component} from 'react';
import {FaClock} from "react-icons/fa";

class TourImageHeader extends Component {

    componentDidMount() {
        document.getElementsByClassName('image-header-image')[0].style.background = 'url(' + this.props.imageUrl + ')'
    }

    render() {
        return (
            <div className="row p-0 m-0">
                <div className='image-header-container col-12 p-0 m-0'>
                    <div className='image-header-image' ref={this.imageDiv}>
                        <div className="tour-image-header-text col-8 offset-2 bg-dark-transparent d-flex p-0">
                            <div className="col-10 text-left px-5 py-3">
                                <h1 className='display-5'>{this.props.title}</h1>
                                <div>
                                    <div className='d-inline'>
                                        <h2 className='d-inline'>{this.props.subtitle}</h2>
                                    </div>
                                    <div className='d-inline'>
                                        <p className='d-inline float-right tour-image-header-departures'><FaClock /> Αναχωρησεις: 3/10, 4/103/10</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 bg-info">
                                <div className='my-3'>
                                    απο
                                    <div className='display-5'>
                                        360€
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TourImageHeader;