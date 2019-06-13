import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import roundTravelLogo from '../../assets/images/general/logo.png'
import telSvg from '../../assets/images/general/phone-dial.svg'

class AppRouter extends Component {
    render() {
        return (
            <div className='bg-semi-transparent nav-wrap col-12'>
                <div className='d-flex px-3 mt-3'>
                    <div className='col-2 mt-3'>
                        <img src={roundTravelLogo} alt=""/>
                    </div>

                    <div className='col-10 p-0 mt-2'>
                        <div className="d-flex flex-wrap">
                            <div className="col-12 ml-auto rt-pre-nav">
                                <div className='float-right'>
                                    <img src={telSvg} alt="call-us"/>+30 801 11 40840 | +30 2811 217 188
                                </div>
                            </div>

                            <hr/>
                            <div className="col-12">
                                <nav>
                                    <ul>
                                        <li className='rt-nav-item'>ΤΑ ΤΑΞΙΔΙΑ ΜΑΣ</li>
                                        <li className='rt-nav-item'>ΠΡΟΣΦΟΡΕΣ</li>
                                        <li className='rt-nav-item'>ΕΝΤΥΠΑ</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AppRouter;