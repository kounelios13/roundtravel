import React from "react"
import CityImage from "../city/city-image"
import '../../styles/tour-offer-wide.scss'
import CityBgImage from "../city/city-bg-image"
import clock from '../../images/general/icons/clock.svg'
import cloudMoon from '../../images/general/icons/cloud-moon.svg'
import calendar from '../../images/general/icons/calendar.svg'
import bus from '../../images/general/icons/bus.svg'
const distanceInWords = require('date-fns/distance_in_words')
var grLocale = require('date-fns/locale/el')


const TourOfferWide = () => {
  let remainingTime = distanceInWords(
    new Date(),
    new Date(2019, 7, 1)
      ,{locale: grLocale}
  )

  const tourOffer =
    <div className={'text-light col-8 offset-2 py-5'}>
      <div className="col-12 my-4">
        <h2 className='display-5 m-0'>Παρισι πολη του φωτος απ' ευθειας απο Ηρακλειο</h2>
        <div className="col-12 p-0 m-0 d-flex flex-wrap">
          <div className="col-8 p-0 m-0">
            <div className='mt-3 p-0 m-0'>
              <div className={'m-0 d-flex flex-wrap pt-2'}>
                <img className='tour-offer-wide-icon d-inline m-0' src={cloudMoon} alt=""/>
                <h4 className='display-7 m-0 d-inline pl-1'><span className={'text-info'}>4</span> Μέρες / <span className="text-info">3</span> Νύχτες</h4>
              </div>
              <div className={'m-0 d-flex flex-wrap pt-2'}>
                <img className='tour-offer-wide-icon d-inline m-0' src={calendar} alt=""/>
                <h4 className='display-7 m-0 d-inline pl-1'>Επομενη αναχώρηση: <span className="text-info">31/ 8</span></h4>
              </div>
              <div className={'m-0 d-flex flex-wrap pt-2'}>
                <img className='tour-offer-wide-icon d-inline m-0' src={bus} alt=""/>
                <h4 className='display-7 m-0 d-inline pl-1'>Τύπος: <span className="text-info">Οδίκως</span></h4>
              </div>
              <div className={'m-0 d-flex flex-wrap pt-2'}>
                <img className='tour-offer-wide-icon d-inline m-0' src={clock} alt=""/>
                <h4 className='display-7 m-0 d-inline pl-1'>Το early booking λήγει: <span className="text-info">{remainingTime}</span></h4>
              </div>
            </div>
          </div>
          <div className="col-4 tour-offer-wide-price">
            asodkaso
          </div>
        </div>

      </div>
    </div>

  return (
        <CityBgImage className={' img-filter'} children={tourOffer} fileName={'louvre-wide.jpg'} />
  )
}



export default TourOfferWide