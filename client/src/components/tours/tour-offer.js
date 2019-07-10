import React, {Component} from 'react';
import pirgos from '../../assets/images/city/eiffel.jpg'

class TourOffer extends Component {
    render() {
        return (
            <div className='tour-offer-wrapper'>
                <div className='col-12 offset-0 col-md-10 offset-md-2 p-0'>
                    <img className='p-0 m-0 col-12 col-md-10' src={pirgos} alt=""/>
                    <div className="position-absolute col-12 col-md-10 tour-offer-title text-center text-info">
                        Υπερπροσφορα Παρισι
                    </div>

                    <div className="col-12 col-md-10">
                        <div className="text-center tour-offer-price">
                            350€
                            <div className='tour-offer-days'>
                                6 Μέρες
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TourOffer;