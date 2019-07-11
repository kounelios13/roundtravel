import React, {Component} from 'react';
import ImageHeader from "../image-headers/image-header";
import eiffel from '../../assets/images/city/eiffel-tower-951509.jpg'
import TourImageHeader from "../image-headers/tour-image-header";
import {FaCalendarDay, FaClock, FaMapMarkerAlt} from "react-icons/fa";
import GeneralInfo from "./general-info";
import TourIntro from "./tour-intro";
import Flights from "./flights";

class Tour extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <TourImageHeader title={'Ταξιδι για οικογενεια 4ων'} subtitle={'Μαγικο παρισι'} imageUrl={eiffel}  />
                <div>
                    <div className="d-flex my-6 flex-wrap align-items-start">
                        <div className="col-8 offset-2 col-lg-6">
                            <TourIntro />
                        </div>

                        <div className='col-8 offset-2 col-lg-2 offset-lg-0 p-0 d-flex flex-wrap'>
                            <GeneralInfo />
                            <Flights />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tour;