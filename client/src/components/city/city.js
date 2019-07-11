import React, {Component} from 'react';
import ImageHeader from "../image-headers/image-header";
import TourGroup from "../tours/tour-group";
import CityDescription from "./city-description";
import PointsOfInterest from "../utils/points-of-interest";
import PhotoGrid from "../utils/photo-grid";
import CityInfo from "./city-info";

class City extends Component {
    render() {
        return (
            <div>
                <ImageHeader title={'Εκδρομη στο Παρισι'} subtitle={'Εκδρομες και εισητηρια για την πολη του φωτος'} imageUrl={'http://www.ihrm2020.org/sites/all/themes/ihrm_theme/images/slide-image-2.jpg'} />
                <TourGroup />
                <CityDescription />
                <PointsOfInterest />
                <PhotoGrid />
                <CityInfo />




                <div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>

        );
    }
}

export default City;