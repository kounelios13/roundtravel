import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import roundTravelLogo from '../../assets/images/general/logo.png'
import telSvg from '../../assets/images/general/phone-dial.svg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tripsHover: true
        }
    }

    updateHoverState(isHovering){
        this.setState({tripsHover: isHovering})
        console.log("mouse is")
    }


    render() {
        return (
            <Router>
                <div className=' rt-nav-wrap col-12'>
                    <div className='d-flex px-3 mt-3'>
                        <div className='col-2 mt-3'>
                            <img src={roundTravelLogo} alt=""/>
                        </div>

                        <div className='col-9 offset-1 p-0 mt-2'>
                            <div className="d-flex flex-wrap">
                                <div className="col-12 ml-auto rt-pre-nav">
                                    <div className='float-right'>
                                        <img src={telSvg} alt="call-us"/><span> Κάλεστε μας τώρα! +30 801 11 40840</span> | <span>+30 2811 217 188</span>
                                    </div>
                                </div>

                                <hr/>

                                <div className="col-12 mt-2">
                                    <nav>
                                        <ul className='m-0'>
                                            <Link to={'/'} as='li' onMouseEnter={()=>{this.updateHoverState(true)}}
                                                  onMouseLeave={()=>{this.updateHoverState(false)}}
                                                  className='rt-nav-item dropdown-toggle'>ΤΑ ΤΑΞΙΔΙΑ ΜΑΣ
                                            </Link>
                                            {
                                                this.state.tripsHover &&
                                                <div className='bg-black rt-nav-dropdown'  onMouseEnter={()=>{this.updateHoverState(true)}} onMouseLeave={()=>{this.updateHoverState(false)}}>
                                                    <div>
                                                        <div className='text-center display-5 text-uppercase'>
                                                            ανακαλυψτε τους πιο απιθανους προορισμους
                                                        </div>
                                                        <div className='d-flex mt-3'>
                                                            <div className="col-3 ml-5 ">
                                                                <div className=''>
                                                                    <span className='rt-nav-dropdown-title'>ΑΝΑΧΩΡΗΣΗ ΑΠΟ</span>
                                                                </div>
                                                                <div>
                                                                    <ul className='list-unstyled mt-3'>
                                                                        <li className='rt-nav-dropdown-item'>Αθήνα</li>
                                                                        <li className='rt-nav-dropdown-item'>Θεσσαλονίκη</li>
                                                                        <li className='rt-nav-dropdown-item'>Ηράκλειο</li>
                                                                        <li className='rt-nav-dropdown-item'>Κύπρος</li>
                                                                        <hr className='rt-nav-hr'/>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-3 d-flex">

                                                                <div>
                                                                    <div className=''>
                                                                        <span className='rt-nav-dropdown-title'>ΠΡΟΟΡΙΣΜΟΙ</span>
                                                                    </div>
                                                                    <div className='bg-danger'>
                                                                        <ul className='list-unstyled mt-3'>
                                                                            <li className='rt-nav-dropdown-item'>Ευρώπη</li>
                                                                            <li className='rt-nav-dropdown-item'>Ελλάδα</li>
                                                                            <li className='rt-nav-dropdown-item'>Αφρική</li>
                                                                            <li className='rt-nav-dropdown-item'>Ασία</li>
                                                                            <li className='rt-nav-dropdown-item'>Αμερική</li>
                                                                            <li className='rt-nav-dropdown-item'>Οκέανια</li>
                                                                            <hr className='rt-nav-hr'/>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                <div>
                                                                    <div className=''>
                                                                        <span className='rt-nav-dropdown-title'>ΠΡΟΟΡΙΣΜΟΙ</span>
                                                                    </div>
                                                                    <div className='bg-danger'>
                                                                        <ul className='list-unstyled mt-3'>
                                                                            <li className='rt-nav-dropdown-item'>Ευρώπη</li>
                                                                            <li className='rt-nav-dropdown-item'>Ελλάδα</li>
                                                                            <li className='rt-nav-dropdown-item'>Αφρική</li>
                                                                            <li className='rt-nav-dropdown-item'>Ασία</li>
                                                                            <li className='rt-nav-dropdown-item'>Αμερική</li>
                                                                            <li className='rt-nav-dropdown-item'>Οκέανια</li>
                                                                            <hr className='rt-nav-hr'/>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3 text-center">
                                                                <span>ΑΝΑ ΤΥΠΟ ΤΑΞΙΔΙΟΥ</span>
                                                            </div>
                                                            <div className="col-3 text-center">
                                                                <span>ΑΝΑ ΤΥΠΟ ΤΑΞΙΔΙΟΥ</span>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>
                                            }
                                            <li className='rt-nav-item'>ΠΡΟΣΦΟΡΕΣ</li>
                                            <li className='rt-nav-item'>ΕΝΤΥΠΑ</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Router>
        );
    }
}

export default AppRouter;