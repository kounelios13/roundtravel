import React, { Component } from "react"
import BgImage from "../general/bg-image"
import cloudMoon from "../../images/icon-cloud-moon.svg"
import calendar from "../../images/icon-calendar.svg"
import airplane from "../../images/icon-plane.svg"
import departure from "../../images/icon-departure.svg"
import '../../styles/tours/tour-summary.scss'
import arrowRight from '../../images/icon-arrow-right.svg'


const grLocale = require('date-fns/locale/el')
const distanceInWords = require('date-fns/distance_in_words')

class TourSummary extends Component {
  constructor(props) {
    super(props)
    this.remainingTime = distanceInWords(
      new Date(),
      new Date(2019, 7, 1)
      ,{locale: grLocale}
    )
    this.tourSummary =
      <div className={'text-light col-10 offset-1 col-lg-8 offset-lg-2 py-5'}>
        <div className="col-12 my-4">
          <h2 className='display-5 m-0'>Εξερευνειστε το μαγικο Μπαλι</h2>
          <h3 className='text-weight-light'>Καλοκαιρινη υπερπροσφορα!</h3>
          <div className="col-12 p-0 m-0 d-flex flex-wrap">
            <div className="col-12 col-lg-7 p-0 m-0">
              <div className='mt-3 p-0 m-0'>
                <details open>
                  <summary className='mb-2'>
                    <span className='display-6'>Με μια ματία</span>
                  </summary>
                  <div className={'m-0 d-flex flex-wrap'}>
                    <img className='tour-offer-wide-icon d-inline m-0' src={cloudMoon} alt=""/>
                    <h4 className='display-8 m-0 d-inline pl-1'><span className="text-light-grey">Διαρκεια:</span> 9 Μέρες /8 Νύχτες</h4>
                  </div>
                  <div className={'m-0 d-flex flex-wrap pt-2'}>
                    <img className='tour-offer-wide-icon d-inline m-0' src={calendar} alt=""/>
                    <h4 className='display-8 m-0 d-inline pl-1'>Επομενη αναχώρηση: 31/ 8</h4>
                  </div>
                  <div className={'m-0 d-flex flex-wrap pt-2'}>
                    <img className='tour-offer-wide-icon d-inline m-0' src={airplane} alt=""/>
                    <h4 className='display-8 m-0 d-inline pl-1'>Τύπος: Αεροπορικως</h4>
                  </div>
                  <div className={'m-0 d-flex flex-wrap pt-2'}>
                    <img className='tour-offer-wide-icon d-inline m-0' src={departure} alt=""/>
                    <h4 className='display-8 m-0 d-inline pl-1'>Αναχώρηση απο: Αθηνα</h4>
                  </div>
                </details>
                <div className='link mt-3'>
                  Περισσότερα
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 tour-offer-wide-price-wrapper align-self-end pt-4 mt-lg-5">
              <div className='p-0 m-0'>
                <span className='strikethrough euro-sign tour-offer-prev-price'>1690</span>
                <span className='pl-4 tour-offer-wide-price euro-sign text-info'> <span className='price-reset'>από</span>1140</span>
              </div>
              <div className='p-0 m-0'>
                <span>Λήξη early booking σε <span className='text-info'>{this.remainingTime}</span></span>
              </div>
              <div>
                <button className='btn btn-info py-1 px-5 mt-3 book-button'>
                  Καντε κρακτηση online
                  <div className='d-inline button-icon-container'>
                    <img className='d-inline button-icon p-0 m-0 pulse' src={arrowRight} alt=""/>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  }


  render() {
    return (
      <section>
        <BgImage className={'img-filter'} children={this.tourSummary} fileName={'bali-land.jpg'} />
      </section>
    )
  }
}

export default TourSummary