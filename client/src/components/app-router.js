import React, {Component} from 'react';
import roundTravelLogo from '../images/logo.png'
import telSvg from '../images/icon-phone-dial.svg'
import '../styles/router.scss'
import { Link } from "gatsby"

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripsHover: false
    }
  }

  updateHoverState(isHovering){
    this.setState({tripsHover: isHovering})
  }

  render() {
    return (
      <div className='row'>
          <div className='rt-nav-wrap p-0 d-none d-lg-block'>
            <div className='d-flex mt-3 col-12 p-0'>
              <div className='col-2 mt-4 mx-5'>
                <img src={roundTravelLogo} alt=""/>
              </div>

              <div className='col-9 offset-1 p-0 mt-2 d-flex'>
                <div className='d-flex flex-wrap col-12'>
                  <div className='col-12 ml-auto rt-pre-nav'>
                    <div className='float-right'>
                      <img src={telSvg} alt="call-us"/> <span>Κάλεστε μας τώρα!</span> <span>+30 801 11 40840</span> | <span>+30 2811 217 188</span>
                    </div>
                  </div>
                  <hr/>
                  <div className="col-12 mt-2">
                    <nav>
                      <ul className='m-0'>
                        <Link to={'/'}>
                        <span onMouseEnter={()=>{this.updateHoverState(true)}}
                              onMouseLeave={()=>{this.updateHoverState(false)}}
                              className={`rt-nav-item`}>
                          ΤΑ ΤΑΞΙΔΙΑ ΜΑΣ
                        </span>
                        </Link>
                        {
                          this.state.tripsHover &&
                          <div className='bg-black rt-nav-dropdown' onMouseEnter={()=>{this.updateHoverState(true)}} onMouseLeave={()=>{this.updateHoverState(false)}}>
                            <div>
                              <div className='text-center display-5 text-uppercase mt-1'>
                                ανακαλυψτε τους πιο απιθανους προορισμους!
                              </div>
                              <div className={`d-flex mt-3`}>
                                <div className={`col-3 ml-5`}>
                                  <div>
                                    <span className='rt-nav-dropdown-title'>ΑΝΑΧΩΡΗΣΗ ΑΠΟ</span>
                                  </div>
                                  <div>
                                    <ul className='list-unstyled'>
                                      <li className='rt-nav-dropdown-item'>Αθήνα</li>
                                      <li className='rt-nav-dropdown-item'>Θεσσαλονίκη</li>
                                      <li className='rt-nav-dropdown-item'>Ηράκλειο</li>
                                      <li className='rt-nav-dropdown-item'>Κύπρος</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div className='rt-nav-dropdown-title'>ΠΡΟΟΡΙΣΜΟΙ</div>
                                  <div className="d-flex mt-4">
                                    <div className='pr-3'>
                                      <div className=''>
                                        <span className='rt-nav-dropdown-title-sub'>ΗΠΕΙΡΟΙ</span>
                                      </div>
                                      <div className=''>
                                        <ul className='list-unstyled mt-3'>
                                          <li className='rt-nav-dropdown-item'>Ευρώπη</li>
                                          <li className='rt-nav-dropdown-item'>Αφρική</li>
                                          <li className='rt-nav-dropdown-item'>Ασία</li>
                                          <li className='rt-nav-dropdown-item'>Αμερική</li>
                                          <li className='rt-nav-dropdown-item'>Οκέανια</li>
                                        </ul>
                                      </div>
                                    </div>

                                    <div className='pl-5'>
                                      <div className=''>
                                        <span className='rt-nav-dropdown-title-sub'>ΔΗΜΟΦΙΛΗΣ</span>
                                      </div>
                                      <div className=''>
                                        <ul className='list-unstyled mt-3'>
                                          <li className='rt-nav-dropdown-item'>Ελλάδα</li>
                                          <li className='rt-nav-dropdown-item'>Γαλλία</li>
                                          <li className='rt-nav-dropdown-item'>Ισπανία</li>
                                          <li className='rt-nav-dropdown-item'>Ινδία</li>
                                          <li className='rt-nav-dropdown-item'>Κίνα</li>
                                          <li className='rt-nav-dropdown-item'>Ταίλανδη</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div className=''>
                                    <span className='rt-nav-dropdown-title'>ΤΥΠΟΣ ΤΑΞΙΔΙΟΥ</span>
                                  </div>
                                  <div>
                                    <ul className='list-unstyled mt-3'>
                                      <li className='rt-nav-dropdown-item'>Αεροπορικώς</li>
                                      <li className='rt-nav-dropdown-item'>Οδικώς</li>
                                      <li className='rt-nav-dropdown-item'>Κρουαζίερες</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div className=''>
                                    <span className='rt-nav-dropdown-title'>ΠΕΡΙΟΔΟΙ</span>
                                  </div>
                                  <div>
                                    <ul className='list-unstyled mt-3'>
                                      <li className='rt-nav-dropdown-item'>Καλοκαίρι</li>
                                      <li className='rt-nav-dropdown-item'>Χριστούγεννα / Πρωτοχρονία</li>
                                      <li className='rt-nav-dropdown-item'>Πάσχα</li>
                                      <li className='rt-nav-dropdown-item'>Πρωτομαγία</li>
                                      <li className='rt-nav-dropdown-item'>Αγίου πνευματος</li>
                                      <li className='rt-nav-dropdown-item'>25ή Μαρτίου</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                        <li className='rt-nav-item'>ΠΡΟΣΦΟΡΕΣ</li>
                        <li className='rt-nav-item'>ΕΝΤΥΠΑ</li>
                        <li className='rt-nav-item'>ΠΟΙΟΙ ΕΙΜΑΣΤΕ</li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default AppRouter;