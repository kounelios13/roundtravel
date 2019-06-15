import React, {Component} from 'react';
import TourSlider from "../tour-slider/tour-slider";
import WelcomeHeader from "./welcome-header";

class Home extends Component {
    render() {
        return (
            <div>
                <TourSlider />
                <WelcomeHeader />
            </div>
        );
    }
}

export default Home;