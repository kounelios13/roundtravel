import React, {Component} from 'react';
import {Helmet} from "react-helmet";

class PointsOfInterest extends Component {

    constructor(props) {

        super(props);

    }

    componentWillMount() {

    }


    render() {
        return (
            <div className='mt-5'>

                <div className="col-8 offset-2 mt-5 bg-dark p-0">
                    <div className="col-8 bg-danger">
                        <img src='https://image.maps.api.here.com/mia/1.6/mapview?app_id=jCl1v5Cba7hYH940f3Kg&app_code=1zD4cybbQ1xahW2QSimZOw&w=1200&h=600&z=9&ml=gre&t=2&poi=52.5,13.4' alt="" className="col-12"/>

                    </div>
                </div>
            </div>
        );
    }
}

export default PointsOfInterest;