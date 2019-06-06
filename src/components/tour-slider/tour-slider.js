import React, {Component} from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class TourSlider extends Component {

    constructor(props) {
        super(props);
        this.sliderTimeOut = 25000
        this.sliderTickInterval = this.sliderTimeOut / 50
        this.imageDiv= React.createRef()
        this.timeIncrementInterval = 0

        this.state = {
            sliderIndex: 0,
            sliderPercentage: 0,
            sliderTrips: [
                {
                    id: 1,
                    imageUrl: 'https://cdn.sooribali.com//img/site_images/soori-bali-beachfront-infinity-pool.jpg',
                    tripTitle: 'ΜΠΑΛΙ',
                    tripSubtitle: 'ΤΟ ΝΗΣΙ ΤΩΝ ΘΕΩΝ',
                    caption1: 'ΑΠ\' ΕΥΘΕΙΑΣ',
                    caption2: 'ΑΠΟ ΗΡΑΚΛΕΙΟ',
                    price: 950
                },
                {
                    id: 2,
                    imageUrl: 'https://static.wixstatic.com/media/93339c_aa35521281d248e78d39640ae26c1ecd~mv2.jpg',
                    tripSubtitle: 'ΠΟΛΗ ΤΟΥ ΦΩΤΟΣ',
                    tripTitle: 'ΠΑΡΙΣΙ',
                    caption1: 'ΠΤΗΣΕΙΣ ΑΠΟ',
                    caption2: 'ΑΘΗΝΑ',
                    price: 450
                }
            ],

        }
        this.increaseSliderIndex = this.increaseSliderIndex.bind(this)
        this.setActiveIndex = this.setActiveIndex.bind(this)
        this.getRemainingPercentage = this.getRemainingPercentage.bind(this)
        this.tickSliderInterval = this.tickSliderInterval.bind(this)
    }

    tickSliderInterval(){
        let percentage = (this.timeIncrementInterval / this.sliderTimeOut) * 100
        this.setState({sliderPercentage: percentage})
        this.timeIncrementInterval += this.sliderTickInterval
    }

    componentDidMount() {
        this.sliderInterval = setInterval(this.increaseSliderIndex, this.sliderTimeOut)
        this.sliderPercentageInterval = setInterval(this.tickSliderInterval, this.sliderTickInterval);
    }



    increaseSliderIndex(){
        console.log('increasing index')
        if(this.state.sliderIndex < this.state.sliderTrips.length-1){
            this.setActiveIndex(this.state.sliderIndex + 1)
            this.timeIncrementInterval = 0
        }else{
            this.setActiveIndex(0)
            this.timeIncrementInterval = 0
        }
    }

    setActiveIndex(i){
        this.imageDiv.current.style.background = 'url(' + this.state.sliderTrips[i].imageUrl + ') no-repeat center center';
        this.imageDiv.current.style.backgroundSize = 'cover'
        this.setState({sliderIndex: i})
        this.setState({percentage: 0})
        this.timeIncrementInterval = 0
        clearInterval(this.sliderInterval)
        this.sliderInterval = setInterval(this.increaseSliderIndex, this.sliderTimeOut)
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
        const trip = this.state.sliderTrips[this.state.sliderIndex]

        return (
            <div className='row p-0 m-0'>
                <div className='col-12 p-0 m-0 image-header-container'>
                    <div className='image-header-image' ref={this.imageDiv}>

                    </div>

                    <div className='text-container bg-red text-uppercase  col-5'>
                        <div className="d-flex">
                            <div className='slider-trip-title col-10'>
                                {trip.tripTitle}
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className='slider-trip-subtitle'>
                                {trip.tripSubtitle}
                            </div>
                            <div className='slider-container-1 col-4'>
                                <div className='slider-caption-1'>
                                    {trip.caption1}
                                </div>
                                <div>
                                    <div className='slider-caption-2'>
                                        {trip.caption2}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='price offset-8 d-flex'>
                            <div className={'slider-badge-container'}>
                                <span className='badge badge-info slider-badge mr-2'>Early price</span>
                            </div>
                            <div>
                                {trip.price}
                            </div>
                        </div>

                    </div>


                    <div className='progress-slider-container'>
                        <ul className='list-unstyled ml-4 mb-3'>
                            {this.state.sliderTrips.map((trip, i)=>{
                                return (
                                    <li key={trip.id} className='cursor-pointer opacity-hover' onClick={()=>{this.setActiveIndex(i)}}>
                                        <CircularProgressbar strokeWidth={15} circleRatio={1} className='progress-slider' value={i === this.state.sliderIndex ? this.state.sliderPercentage : 0} styles={buildStyles({pathColor: '#3e98c7', trailColor: 'rgba(0,0,0,.8)'})} />
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