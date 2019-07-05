import React, {Component} from 'react';
import ImageHeader from "../image-headers/image-header";
import TourGroup from "../tours/tour-group";

class City extends Component {
    render() {
        return (
            <div>
                <ImageHeader />
                <TourGroup />
            </div>
        );
    }
}

export default City;