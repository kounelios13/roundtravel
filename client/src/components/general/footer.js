import React from "react"
import facebookIcon from '../../images/icon-facebook.svg'
import instgramIcon from '../../images/icon-instagram.svg'
import twitterIcon from '../../images/icon-twitter.svg'

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
              <ul className='list-unstyled inline-list'>
                {/*<li className='d-inline'>ajijdijadw</li>*/}
                {/*<li className='d-inline'>ajijdijadw</li>*/}
                {/*<li className='d-inline'>ajijdijadw</li>*/}
                <li className='d-inline-block'><img className='d-inline img-reverse' src={facebookIcon} alt="facebook logo icon"/></li>
                <li className='d-inline-block'><img className='d-inline img-reverse' src={instgramIcon} alt="instagram logo icon"/></li>
                <li className='d-inline-block'><img className='d-inline img-reverse' src={twitterIcon} alt="twitter logo icon"/></li>
              </ul>
            </div>
          </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer