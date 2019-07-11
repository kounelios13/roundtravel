import React, {Component} from 'react';
import {FaCalendarDay, FaClock, FaMapMarkerAlt} from "react-icons/fa";


class GeneralInfo extends Component {
    render() {
        return (
            <div className='bg-jumbotron p-0 col-12'>
                <h2 className="text-center display-7 bg-info-2 p-3 text-white">Σημαντικες Πληροφοριες</h2>
                    <div className='p-3'>
                        <div className='mt-3'>
                            <div>
                                <FaCalendarDay /> <b>Αναχωρήσεις</b>
                            </div>
                            <div className='text-secondary'>
                                30/6, 5/7, 19/7, 20/7,  30/6, 5/7, 19/7, 20/7, 30/6, 5/7, 19/7, 20/7
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div>
                                <FaClock /> <b>Διαρκεια</b>
                            </div>
                            <div className='text-secondary'>
                                6 Μέρες / 7 Νύχτες
                            </div>
                        </div>

                        <div className='mt-3'>
                            <div>
                                <FaMapMarkerAlt /> <b>Αναχώρηση από</b>
                            </div>
                            <div className='text-secondary'>
                                Αθήνα/ Ηράκλειο/ Χανία
                            </div>
                        </div>
                    </div>
            </div>

        );
    }
}

export default GeneralInfo;