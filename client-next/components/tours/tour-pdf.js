import React, {Component} from 'react';
import {FaPrint} from "react-icons/fa";

class TourPdf extends Component {
    render() {
        return (
            <div className='col-12 mt-3 bg-jumbotron p-0 d-flex flex-wrap'>
                <div className="col-12 p-0">
                    <h2 className="text-center display-7 bg-info-2 p-3 text-white">Εγγραφο PDF</h2>
                </div>
                <div className='d-flex p-2 pt-4 pb-5'>
                    <div className='col-7'>
                        Λαβέτε το εγγραφό σε έντυπη μορφή
                    </div>
                    <div className='col-3'>
                        <div className='icon-style-circle app-pointer'>
                            <FaPrint />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TourPdf;