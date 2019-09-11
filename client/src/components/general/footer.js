import React from "react"
import facebookIcon from '../../images/icon-facebook.svg'
import instgramIcon from '../../images/icon-instagram.svg'
import twitterIcon from '../../images/icon-twitter.svg'
import Image from "./image"
import '../../styles/footer.scss'

const Footer = () => {
  return (
    <footer className='col-12 d-flex flex-wrap text-white bg-black p-lg-0 p-0'>
      <div className="p-5 col-12">
        <div className="col-12">
          <h3 className='offset-1'>Roundtravel</h3>
        </div>
        <div className="col-12 d-flex flex-wrap">
          <div className="col-2 offset-1">
            <div className='pl-3 d-flex flex-wrap'>
              <div className='col-12 p-0 m-0'>
                <h4>Βρειτε μας</h4>
                <ul className='list-unstyled footer-list'>
                  <div className='footer-title'>
                    Γραφειο Ηρακλειου
                  </div>
                  <div className="text-secondary">
                    <div>
                      Ζογραφου 12
                    </div>
                    <div>
                      Ηρακλειο, 71201
                    </div>
                    <div>
                      +30 2810 255320
                    </div>
                  </div>

                </ul>
              </div>
            </div>
          </div>
          <div className="col-2 offset-1">
            <div className='pl-3 d-flex flex-wrap'>
              <div className='col-12 p-0 m-0'>
                <h4>Χαρτης σελιδας</h4>
                <ul className='list-unstyled footer-list'>
                  <li>Κεντρικη</li>
                  <li>Ευρωπη</li>
                  <li>Ασια</li>
                  <li>Αμερικη</li>
                  <li>Αφρικη</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className='pl-3 d-flex flex-wrap'>
              <div className='col-12 p-0 m-0'>
                <h4>Συνδεθειτε μαζι μας</h4>
                <div className="d-flex flex-wrap">
                  <img className='img-reverse p-1 footer-social-icon' src={instgramIcon} alt="instagram logo icon"/>
                  <img className='img-reverse p-1 footer-social-icon' src={twitterIcon} alt="twitter logo icon"/>
                  <img className='img-reverse p-1 footer-social-icon' src={facebookIcon} alt="twitter logo icon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 text-center text-white footer-notice py-1">
        Handcrafted with love by Saint Laurent, all rights reserved.
      </div>
    </footer>
  )
}

export default Footer