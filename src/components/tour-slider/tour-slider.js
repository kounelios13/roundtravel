import React, {Component} from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class TourSlider extends Component {

    constructor(props) {
        super(props);
        this.imageDiv= React.createRef()
        this.spinnerInterval = {}
        this.spinnerTimeout = {}

        this.state = {

            sliderIndex: 0,
            sliderPercentage: 30,
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
            ],

        }
        this.increaseSliderIndex = this.increaseSliderIndex.bind(this)
        this.setActiveIndex = this.setActiveIndex.bind(this)
        this.getRemainingPercentage = this.getRemainingPercentage.bind(this)
        this.increaseSliderInterval = this.increaseSliderInterval.bind(this)
    }


    componentDidMount() {
        this.spinnerTimeout = setInterval(this.increaseSliderIndex, 3000)
    }

    increaseSliderIndex(){
        console.log('increasing index')
        if(this.state.sliderIndex < this.state.sliderTrips.length-1){
            this.setActiveIndex(this.state.sliderIndex + 1)
        }else{
            this.setActiveIndex(0)
        }
        // clearInterval(this.spinnerInterval)
        // this.setState({sliderPercentage: 0})
        // this.spinnerInterval = setInterval(this.increaseSliderInterval, 100)
    }

    setActiveIndex(i){
        this.imageDiv.current.style.background = 'url(' + this.state.sliderTrips[i].imageUrl + ') no-repeat center center';
        this.imageDiv.current.style.backgroundSize = 'cover'
        this.setState({sliderIndex: i})
    }

    increaseSliderInterval(){
        this.setState({sliderPercentage: this.state.sliderPercentage + 1})
    }

    getRemainingPercentage(i){
        console.log('called')
        if(i !== this.state.sliderIndex){
            return 0
        }else{
            return 20
        }
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
                                        <CircularProgressbar  strokeWidth={15} circleRatio={1} className='progress-spinner' value={i === this.state.sliderIndex ? this.state.sliderPercentage : 0} styles={buildStyles({pathColor: '#3e98c7', trailColor: 'rgba(0,0,0,.8)'})} />
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