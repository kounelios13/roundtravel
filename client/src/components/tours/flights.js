import React, {Component} from 'react';
import aegean from '../../assets/images/general/flights/aegean.png'
import {FaPlane, FaPlaneArrival, FaPlaneDeparture} from "react-icons/fa";

class Flights extends Component {
    render() {
        return (
            <div className='mt-5 col-12 bg-jumbotron p-0'>
                <div className='d-flex bg-info'>
                    <div className='col-3 bg-info m-0 p-0'>
                        <img src={aegean} className='img-fluid pl-3' alt=""/>
                    </div>
                    <div className='bg-info col-9'>
                        <h2 className="pl-4 display-7 bg-info-2 p-3 text-white">Πτήσεις</h2>
                    </div>
                </div>
                <div className='align-items-center'>
                    <div>
                        <div>
                            <div className='d-flex text-center align-items-center'>
                                <div className="col-5">
                                    <div>
                                        ΑZ717 HER
                                    </div>
                                    <div className='app-text-small text-secondary'>
                                        06:00
                                    </div>
                                </div>
                                <div className="col-2">
                                    <FaPlaneDeparture />
                                </div>
                                <div className="col-5">
                                    <div>
                                        ΑZ 717 PRS
                                    </div>
                                    <div className='app-text-small text-secondary'>
                                        08:00
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex text-center align-items-center'>
                                <div className="col-5">
                                    <div>
                                        ΑZ717 HER
                                    </div>
                                    <div className='app-text-small text-secondary'>
                                        06:00
                                    </div>
                                </div>
                                <div className="col-2">
                                    <FaPlaneArrival className='icon-reverse app-flip-icon' />
                                </div>
                                <div className="col-5">
                                    <div>
                                        ΑZ 717 PRS
                                    </div>
                                    <div className='app-text-small text-secondary'>
                                        08:00
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

export default Flights;