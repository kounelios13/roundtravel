import React from "react"
import facebookIcon from '../../images/icon-facebook.svg'
import instgramIcon from '../../images/icon-instagram.svg'
import twitterIcon from '../../images/icon-twitter.svg'
import Image from "./image"

const Footer = () => {
  return (
    <footer className='col-12 d-flex flex-wrap text-white bg-black p-5'>
      <div className="col-12">
        <h3 className='offset-1'>Roundtravel</h3>
      </div>
      <div className="col-12 d-flex flex-wrap">
        <div className="col-2 offset-1">
          <div className='pl-3 d-flex flex-wrap'>
            <div className='col-12 p-0 m-0'>
              <h4>Χαρτης σελιδας</h4>
              <ul className='list-unstyled'>
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
                {/*<img className='col-4 d-inline-block img-reverse p-1' src={facebookIcon} alt="facebook logo icon"/>*/}
                {/*<Image className={'col-4 d-inline-block img-reverse p-1'} fileName={'icon-facebook.svg'} alt={'facebook logo icon'} />*/}
                <img className='col-4 d-inline-block img-reverse p-1' src={instgramIcon} alt="instagram logo icon"/>
                <img className='col-4 img-reverse p-1' src={twitterIcon} alt="twitter logo icon"/>
              </div>
            </div>
          </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer