import React from "react"
import aviationAegean from '../../images/aviation-aegean.png'
import '../../styles/tours/tour-flights.scss'
import iconPlane from '../../images/icon-plane-plain.svg'

const TourFlights = () => {
  return (
    <div className='col-12 border-top-primary mt-4 shadow p-4'>
      <h2 className='display-7-2 text-normal'>Αεροπορικες πτησεις</h2>
      <div className='border-bottom pb-2'>
        <div className='d-flex flex-wrap tour-flights-caption-space'>
          <img className='tour-flights-aviation-img d-inline-block p-0 m-0 col-3' src={aviationAegean} alt=""/>
          <div className="d-inline-block col-9 d-flex align-items-center text-center">
            <div className="col-4">
              <div className='text-bold reduced-line-height'>ATH</div>
              <div className='text-small text-secondary'>14:20</div>
            </div>
            <div className='col-4'>
              <img className='tour-flights-aviation-icon--departure' src={iconPlane} alt=""/>
            </div>
            <div className="col-4">
              <div className='text-bold reduced-line-height'>JKT</div>
              <div className='text-small text-secondary'>19:10</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='d-flex flex-wrap tour-flights-caption-space'>
          <img className='tour-flights-aviation-img d-inline-block p-0 m-0 col-3' src={aviationAegean} alt=""/>
          <div className="d-inline-block col-9 d-flex align-items-center text-center">
            <div className="col-4">
              <div className='text-bold reduced-line-height'>JKT</div>
              <div className='text-small text-secondary'>14:20</div>
            </div>
            <div className='col-4'>
              <img className='tour-flights-aviation-icon--arrival' src={iconPlane} alt=""/>
            </div>
            <div className="col-4">
              <div className='text-bold reduced-line-height'>ATH</div>
              <div className='text-small text-secondary'>19:10</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TourFlights