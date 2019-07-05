import React, {Component} from 'react';
import monaco from '../../assets/images/city/monaco4-3.jpg'
import alsace from '../../assets/images/city/alsace4-3.jpg'
import lubre from '../../assets/images/city/lubre4-3.jpg'

class TourGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tours: [
                {
                    url: lubre,
                    title: 'Φανταστικο Μονακο'
                },
                {
                    url: alsace,
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

            ]
        }
    }


    render() {
        return (
            <div className='row p-0 m-0'>
                <div className="text-center col-12 mt-5">
                    <h3 className='display-5'>Τα πιο αγαπημενα</h3>
                    <h4 className='text-info'>Ανακαλυψτε τα παντα στο Παρισι</h4>
                    <hr className='col-6 offset-3' />
                </div>
                <div className="d-flex tours-group-wrapper col-8 offset-2">
                    {this.state.tours.map(tour=>{
                        return (
                            <div className='border col-4 mt-5 p-0 ml-1'>
                                <img className='tour-group-image img-fluid col-12 p-0' src={tour.url} alt=""/>
                                <div className='text-center'>
                                    asodkasdokas
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default TourGroup;