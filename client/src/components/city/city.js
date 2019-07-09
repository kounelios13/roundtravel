import React, {Component} from 'react';
import ImageHeader from "../image-headers/image-header";
import TourGroup from "../tours/tour-group";
import ShowMore from 'react-show-more';
import CityDescription from "./city-description";
import PointsOfInterest from "../utils/points-of-interest";
import PhotoGrid from "../utils/photo-grid";

class City extends Component {
    render() {
        return (
            <div>
                <ImageHeader />
                <TourGroup />
                <CityDescription />
                <PointsOfInterest />
                <PhotoGrid />




                <div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>

        );
    }
}

export default City;