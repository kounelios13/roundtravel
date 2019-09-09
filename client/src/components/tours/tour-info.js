import React from "react"
import iconCloudMoon from "../../images/icon-cloud-moon.svg"
import iconBoard from "../../images/icon-board.svg"
import iconDeparture from "../../images/icon-departure.svg"
import iconPlane from "../../images/icon-plane.svg"
import iconPlus from "../../images/icon-plus.svg"
import iconCreditCard from "../../images/icon-credit-card.svg"
import iconHuman from "../../images/icon-human.svg"

const TourInfo = () => {
  return (
    <div className="col-12 d-flex flex-wrap shadow p-4 border-top-primary">
      <h6 className='display-7-2 text-normal mb-2 col-12'>Γενικες πληροφοριες</h6>
      <div className="col-12">
        <ul className='list-unstyled included-list mt-3'>
          <li>
            <img className='details-icon' src={iconPlane} alt=""/>
            <span className="text-secondary">Τυπος:</span> <span className="text-bold">Αεροπορικως</span>
          </li>
          <li>
            <img className='details-icon' src={iconDeparture} alt=""/>
            <span className="text-secondary">Αναχώρηση από:</span> <span className="text-bold">Αθήνα/ Ηράκλειο</span>
          </li>
          <li>
            <img className='details-icon d-inline' src={iconCloudMoon} alt=""/>
            <div className='d-inline-block'>
              <span className="text-secondary">Διαρκεια:</span>
                <span className="text-bold"> 8 Μερές/ 9 Νυχτές</span>
            </div>
          </li>
          <li>
            <img className='details-icon d-inline' src={iconCloudMoon} alt=""/>
            <div className='d-inline-block'>
              <span className="text-secondary">Τυπος:</span>
              <span className="text-bold"> Ομαδικο</span>
            </div>
          </li>
          <li>
            <img className='details-icon' src={iconBoard} alt=""/>
            <span className="text-secondary">Επομενη αναχωρηση:</span> <span className="text-bold">31/9</span>
          </li>


          <li>
            <img className='details-icon' src={iconPlus} alt=""/>
            <span className="text-secondary">Αναχωρησεις που απομενουν:</span> <span className="text-bold">9</span>
          </li>
          <li>
            <img className='details-icon' src={iconCreditCard} alt=""/>
            <span className="text-secondary">Φτηνοτερη τιμη:</span> <span className="text-bold euro-sign">1140</span>
          </li>
          <li>
            <img className='details-icon' src={iconHuman} alt=""/>
            <span className="text-secondary">Καταλληλο για:</span> <span className="text-bold">Ολους</span>
          </li>
          <li>
            <img className='details-icon' src={iconHuman} alt=""/>
            <span className="text-secondary">Δυνατοτητα παρατασης</span> <span className="text-bold">Ναι</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TourInfo