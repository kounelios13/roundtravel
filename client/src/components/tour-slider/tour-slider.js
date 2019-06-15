import React, {Component} from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import distanceInWords from 'date-fns/distance_in_words';
import grLocale from 'date-fns/locale/el'
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/es/FormControl";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {FaSearch} from "react-icons/fa";

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
                    imageUrl: 'https://wallpaperplay.com/walls/full/0/8/9/203246.jpg',
                    tripTitle: 'ΜΠΑΛΙ',
                    tripSubtitle: 'ΤΟ ΝΗΣΙ ΤΩΝ ΘΕΩΝ',
                    caption1: 'ΑΠ\' ΕΥΘΕΙΑΣ',
                    caption2: 'ΑΠΟ ΗΡΑΚΛΕΙΟ',
                    price: 950,
                    earlyBookingExpiration: new Date(2019, 5, 7)
                },
                {
                    id: 2,
                    imageUrl: 'https://wallpaperplay.com/walls/full/0/8/9/203246.jpg',
                    tripSubtitle: 'ΠΟΛΗ ΤΟΥ ΦΩΤΟΣ',
                    tripTitle: 'ΠΑΡΙΣΙ',
                    caption1: 'ΠΤΗΣΕΙΣ ΑΠΟ',
                    caption2: 'ΑΘΗΝΑ',
                    price: 450,
                    earlyBookingExpiration: new Date(2019, 6, 9)

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

    normalizeGreek(text) {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
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

        let remainingTime = this.normalizeGreek(distanceInWords(
            new Date().toLocaleString('en-US', { timeZone: 'Europe/Athens' }),
            trip.earlyBookingExpiration,
            {locale: grLocale}
        ))
        return (
            <div className='row p-0 m-0'>
                <div className='col-12 p-0 m-0 image-header-container'>
                    <div className='image-header-image' ref={this.imageDiv}>
                    </div>

                    <div className='slider-container  text-uppercase col-5'>
                        <div className="d-flex">
                            <div className='slider-trip-title col-10'>
                                {trip.tripTitle}
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className='slider-trip-subtitle'>
                                {trip.tripSubtitle}
                            </div>
                            <div className='slider-caption-container col-4'>
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

                        <div className=' offset-8 d-flex'>
                            <div className='slider-badge-container'>
                                <span className='badge badge-info slider-badge'>Early Booking</span>
                            </div>
                            <div className='slider-price'>
                                {trip.price}
                            </div>
                        </div>
                        <div className='slider-countdown-container col-6 offset-7'>
                            <div className='price-caption'>
                                <small>Ληγει σε</small>
                            </div>
                            <div>
                                <span className='slider-time-remaining'>{remainingTime}</span>
                            </div>
                            {/*1 <small>Μέρα</small> 4 <small>Ωρες</small> 15 <small>Λέπτα</small>*/}
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

                    <div className='slider-arrow'>
                        <div className="arrow">
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>
                    </div>
                    {/*<div className="slider-search">*/}
                    {/*    <div className='text-center'>*/}
                    {/*        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">*/}
                    {/*            <Tab eventKey="profile" title={<span> <FaSearch /> ΑΝΑΖΗΤΗΣΗ</span>} tabClassName={'tab-top-pane'}>*/}
                    {/*                <input className='my-2 mr-3' type="text"/>*/}
                    {/*                <button className={'btn btn-secondary px-3 py-1'}>ΓΡΗΓΟΡΗ ΑΝΑΖΗΤΗΣΗ</button>*/}
                    {/*            </Tab>*/}
                    {/*        </Tabs>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </div>
        );
    }
}

export default TourSlider;