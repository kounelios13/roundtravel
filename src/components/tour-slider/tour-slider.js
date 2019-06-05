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
                    imageUrl: 'https://cdn.sooribali.com//img/site_images/soori-bali-beachfront-infinity-pool.jpg',
                    text1: 'Bali Tour',
                    text2: 'Lorem',
                    text3: 'Lorem Ipsum'
                },
                {
                    id: 2,
                    imageUrl: 'https://images.thrillophilia.com/image/upload/s--DGqAXu3R--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/110/247/original/1491907892_krabi.jpg.jpg?1491907892',
                    text1: 'Bali Tour',
                    text2: 'Lorem',
                    text3: 'Lorem Ipsum'
                },
                {
                    id: 3,
                    imageUrl: 'https://cdn.shopify.com/s/files/1/1003/7610/products/night_scene_of_the_Louvre_Museum_Wall_Mural_Wallpaper_a.jpg?v=1527599727',
                    text1: 'Bali Tour',
                    text2: 'Lorem',
                    text3: 'Lorem Ipsum'
                }
            ]
        }

        this.setActiveIndex = this.setActiveIndex.bind(this)

    }


    setActiveIndex(i){
        console.log(this.state.sliderTrips[i])
        this.imageDiv.current.style.background = 'url(' + this.state.sliderTrips[i].imageUrl + ') no-repeat center center';
        this.imageDiv.current.style.backgroundSize = 'cover'
    }

    render() {
        return (
            <div className='row p-0 m-0'>
                <div className='col-12 p-0 m-0 image-header-container'>
                    <div className='image-header-image' ref={this.imageDiv}>

                    </div>
                    <div className='progress-spinner-container'>
                        <ul className='list-unstyled ml-4 mb-3'>

                            {this.state.sliderTrips.map((trip, i)=>{
                                return (
                                    <li key={trip.id} onClick={()=>{this.setActiveIndex(i)}}>
                                        <CircularProgressbar  strokeWidth={15} circleRatio={1} className='progress-spinner' value={90} styles={buildStyles({pathColor: '#3e98c7', trailColor: 'rgba(0,0,0,.8)'})} />
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