import React, {Component} from 'react';
import ImageHeader from "../image-headers/image-header";
import eiffel from '../../assets/images/city/eiffel-tower-951509.jpg'

class Tour extends Component {
    render() {
        return (
            <div>
                <ImageHeader title={'Εκδρομη στο Παρισι'} subtitle={'Εκδρομες και εισητηρια για την πολη του φωτος'} imageUrl={eiffel} />
            </div>
        );
    }
}

export default Tour;