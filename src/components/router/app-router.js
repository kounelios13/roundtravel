import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import roundTravelLogo from '../../assets/images/general/logo.png'
import telSvg from '../../assets/images/general/phone-dial.svg'

class AppRouter extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar collapseOnSelect expand="lg" className='fixed-top navbar-main'>
                        <Navbar.Brand href="#home">
                            <img className='menu-logo' src={roundTravelLogo} alt=""/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#features">ΑΠΟ ΑΘΗΝΑ</Nav.Link>
                                <Nav.Link href="#pricing">ΑΠΟ ΗΡΑΚΛΕΙΟ</Nav.Link>
                                <NavDropdown title="ΠΡΟΟΡΙΣΜΟΙ" id="collasible-nav-dropdown">
                                    <div className=''>
                                        <div className='bg-dark col-6'>
                                            asdok
                                        </div>
                                    </div>
                                </NavDropdown>
                            </Nav>
                            <Nav className='d-none d-lg-flex'>
                                <Nav.Link href="#deets" className='border-right pr-3'>
                                    <img src={telSvg} alt="call-us" className='mr-3'/>
                                    2810 23956
                                </Nav.Link>
                                <Nav.Link href="#deets">
                                    <img src={telSvg} alt="call-us"/>
                                    tours@roundtravel.gr
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default AppRouter;