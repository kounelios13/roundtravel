import React from "react"
import iconArrowRight from "../../images/icon-arrow-right.svg"
import iconPrinter from "../../images/icon-printer.svg"

const TourActionButtons = () => {
  return (
    <div className="col-12 d-flex flex-wrap p-0 m-0 mt-3 mt-lg-4">
      <button className='btn btn-info d-none d-md-block tour-details-button col-12'>
        <span className="text-bold">Καντε κρατήση</span>
        <img className='btn-icon img-reverse pulse' src={iconArrowRight} alt=""/>
        <span className="btn-icon-overlay"></span>
      </button>
      <button className='btn btn-info d-none d-md-block tour-details-button col-12 mt-2'>
        <span className="text-bold">Εκτυπωστε σε PDF</span>
        <img className='btn-icon img-reverse' src={iconPrinter} alt=""/>
        <span className="btn-icon-overlay"></span>
      </button>
    </div>
  )
}

export default TourActionButtons