import React, {Component} from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class TourSlider extends Component {

    constructor(props) {
        super(props);
        this.imageDiv= React.createRef()
        this.state = {

            sliderIndex: 0,
            sliderTrips: [
                {
                    id: 1,
                    imageUrl: '../src/assets/images/1.jpg',
                    text1: 'Bali Tour',
                    text2: 'Lorem',
                    text3: 'Lorem Ipsum'
                },
                {
                    id: 2,
                    imageUrl: '../src/assets/images/2.jpg',
                    text1: 'Bali Tour',
                    text2: 'Lorem',
                    text3: 'Lorem Ipsum'
                },
                {
                    id: 3,
                    imageUrl: '../src/assets/images/3.jpg',
                    text1: 'Bali Tour',
                    text2: 'Lorem',
                    text3: 'Lorem Ipsum'
                }
            ]
        }
    }



    render() {
        return (
            <div className='row p-0 m-0'>
                <div ref={this.imageDiv} className='col-12 p-0 m-0 image-header-container'>
                    <div className='image-header-image'>

                    </div>
                    <div className='progress-spinner-container'>
                        <ul className='list-unstyled ml-4 mb-3'>

                            {this.state.sliderTrips.map((trip)=>{
                                return (
                                    <li key={trip.id}>
                                        <CircularProgressbar  strokeWidth={15} circleRatio={1} className='progress-spinner' value={50} styles={buildStyles({pathColor: '#3e98c7', trailColor: 'rgba(0,0,0,.8)'})} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default TourSlider;