import React, {Component} from 'react';
import monaco from '../../assets/images/city/monaco4-3.jpg'
import alsace from '../../assets/images/city/alsace4-3.jpg'
import lubre from '../../assets/images/city/lubre4-3.jpg'
import circle from '../../assets/images/general/circle.png'
import circleSelected from '../../assets/images/general/circle2.svg'
import {Swipe, Position} from "react-swipe-component"


class TourGroup extends Component {


    constructor(props) {
        super(props);

        this.state = {
            groupContainer: React.createRef(),
            tours: [
                {
                    url: lubre,
                    title: 'Φανταστικο Μονακο',
                },
                {
                    url: alsace,
                    title: 'Μαγευτικη Αλσατια'
                },
                {
                    url: monaco,
                    title: 'Φανταστικο Μονακο'
                },
                {
                    url: monaco,
                    title: 'Φανταστικο Μονακο'
                },
                {
                    url: monaco,
                    title: 'Φανταστικο Μονακο'
                },
                {
                    url: monaco,
                    title: 'Φανταστικο Μονακο'
                },
                {
                    url: monaco,
                    title: 'Φανταστικο Μονακο'
                },
                {
                    url: monaco,
                    title: 'Φανταστικο Μονακο'
                },
                {
                    url: monaco,
                    title: 'Φανταστικο Μονακο'
                },
                {
                    url: monaco,
                    title: 'Φανταστικο Μονακο'
                }
            ],
            activeIndex: 0
        }
        this.selectIndex = this.selectIndex.bind(this)
    }



    selectIndex(i){
        const currentRef= this.state.groupContainer.current
        const widthFraction = currentRef.clientWidth
        const scrollAmount = i * widthFraction
        currentRef.scroll(scrollAmount, 0, 'smooth')
        this.setState({activeIndex: i})
    }

    onSwipeListener = (p) => {
        if (p.x !== 0) {
            console.log(`Swipe x: ${p.x}`)
        }
        if (p.y !== 0) {
            console.log(`Swipe y: ${p.y}`)
        }
    }

    onSwipeEnd = () => {
        console.log("Swiped right")
    }

    onSwipeRightListener = () => {
        console.log("Swiped right")
    }

    render() {
        let circleCount = Math.ceil(this.state.tours.length / 3)
        if(window.screen.width < 600){
            circleCount = this.state.tours.length
        }

        return (
            <div className='row p-0 m-0 bg-jumbotron pb-7'>
                <div className="col-8 offset-2 mt-5">
                    <div className='mt-5'>
                        <h3 className='display-5'>Τα πιο αγαπημενα</h3>
                        <h4 className='text-info'>Ανακαλυψτε τα παντα στο Παρισι</h4>
                        <hr className='col-12' />
                    </div>
                </div>
                <div  ref={this.state.groupContainer} className="d-flex tours-group-wrapper col-8 p-0 offset-2">
                    {this.state.tours.map((tour, i)=>{

                        return (

                            <Swipe nodeName="div" className={'border-black col-12 col-lg-4 mt-4 p-0'} onSwipedRight={this.onSwipeRightListener} onSwipe={this.onSwipeListener} onSwipeEnd={this.onSwipeEnd}>
                                    <div>
                                        <img className='tour-group-image img-fluid col-12 p-0' src={tour.url} alt=""/>
                                        <div className='position-absolute tour-group-price-caption'>
                                            από 330€
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <span className='tour-grou-title'>{tour.title}</span>
                                        <div>
                                            Η προσφορα ληγει σε <span className="text-info">3 ώρες</span>
                                        </div>
                                    </div>

                            </Swipe>


                        )
                    })}
                    </div>
                <div className='col-12 text-center mb-5 mt-4'>
                    {
                        Array(circleCount).fill(1).map((el, i)=>{
                            let img = circle
                            if(i === this.state.activeIndex){
                                img = circleSelected
                            }
                            return (
                                <span key={i * 300} className='mb-5' onClick={()=>{this.selectIndex(i)}}>
                                    <img className='img-circle' src={img} alt=""/>
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TourGroup;