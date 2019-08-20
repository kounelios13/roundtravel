import React from "react"
import '../../styles/tours/tour-details.scss'
import iconCheck from '../../images/icon-check.svg'
import iconMinus from '../../images/icon-minus.svg'
import iconCloudMoon from '../../images/icon-cloud-moon.svg'
import iconBoard from '../../images/icon-board.svg'
import iconPlane from '../../images/icon-plane.svg'
import iconDeparture from '../../images/icon-departure.svg'
import iconPrinter from '../../images/icon-printer.svg'
import iconArrowRight from '../../images/icon-arrow-right.svg'
import iconEnvelope from '../../images/icon-envelope.svg'
import iconPhone from '../../images/icon-phone.svg'


import keys from '../../env/keys/maps.keys'

const TourDetails = () => {
  return (
    <section className='p-0 m-0 d-flex flex-wrap mb-5'>
      <div className="col-12 text-center my-6">
        <h3 className='display-5 text-bold py-2 m-0'>Πληροφοριες εκδρομης</h3>
        <h2 className='display-7 text-normal m-0 p-0'>Πληροφοριες οπως πτησεις, προγραμμα, αεροπορικα εισητηρια, ξενοδοχεια</h2>
      </div>
      <div className="col-lg-5 offset-lg-2">
        <div className="col-12 d-flex flex-wrap">
          <div className="col-12 shadow p-4 border-top-info">
            <h6 className='display-7-2 text-normal mb-2'>Γενικες πληροφοριες</h6>
            <ul className='list-unstyled included-list mt-3'>
              <li>
                <img className='details-icon' src={iconCloudMoon} alt=""/>
                <span className="text-secondary">Διαρκεια:</span> <span className="text-bold">8 Μερές/ 9 Νυχτές</span>
              </li>
              <li>
                <img className='details-icon' src={iconBoard} alt=""/>
                <span className="text-secondary">Επομενη αναχωρηση:</span> <span className="text-bold">31/9</span>
              </li>
              <li>
                <img className='details-icon' src={iconDeparture} alt=""/>
                <span className="text-secondary">Αναχώρηση από:</span> <span className="text-bold">Ηράκλειο</span>
              </li>
              <li>
                <img className='details-icon' src={iconPlane} alt=""/>
                <span className="text-secondary">Τυπος:</span> <span className="text-bold">Αεροπορικως</span>
              </li>
            </ul>
            <div>
              <h6 className='display-7 text-bold m-0 p-0 mb-2 text-normal'>Σημαντικες σημειωσεις</h6>
              <div className='m-0 p-0 ml-2'>
                <ul className='list-unstyled text-secondary'>
                  <li>Η Σειρά εκτέλεσης του προγράμματος είναι ενδεικτική και τροποποιείται σύμφωνα με τις αργίες, τις ώρες πτήσεων και τα ραντεβού των μουσείων για τις ξεναγήσεις.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 mt-5 shadow p-4 border-top-info">
            <h6 className='display-7-2 text-normal mb-2'>Περιλαμβανομενα <span className="text-small text-secondary">(9)</span></h6>
            <ul className='list-unstyled included-list mt-3 text-secondary'>
              <li>
                <img className='included-icon' src={iconCheck} alt=""/>
                Διαμονή σε επιλεγμένα ξενοδοχεία πεντε αστερων
              </li>
              <li>
                <img className='included-icon' src={iconCheck} alt=""/>
                Αεροπορικό εισιτήριο σε οικονομική θέση
              </li>
              <li>
                <img className='included-icon' src={iconCheck} alt=""/>
                Φόροι αεροδρομίων & επίναυλος καυσίμων (200 € ανά άτομο)
              </li>
              <li>
                <img className='included-icon' src={iconCheck} alt=""/>
                Μία (1) αποσκευή και μία (1) χειραποσκευή ο έκαστος
              </li>
              <li>
                <img className='included-icon' src={iconCheck} alt=""/>
                Μεταφορές από και προς το αεροδρόμιο στο Μπαλί
              </li>
              <li>
                <img className='included-icon' src={iconCheck} alt=""/>
                Ολοήμερη εκδρομή στα καλύτερα του Ubud (ομαδικό πρόγραμμα)
              </li>
              <li>
                <img className='included-icon' src={iconCheck} alt=""/>
                24ωρο τηλέφωνο ανάγκης & Υπηρεσίες τοπικών αντιπροσώπων
              </li>
              <li>
                <img className='included-icon' src={iconCheck} alt=""/>
                Ελληνόφωνος τοπικός αντιπρόσωπος
              </li>
              <li>
                <img className='included-icon' src={iconCheck} alt=""/>
                Ενημερωτικά έντυπα, Τοπικοί φόροι, Ασφάλεια αστικής ευθύνης, ΦΠΑ
              </li>
            </ul>
          </div>
          <div className="col-12 mt-3 p-4 shadow border-top-info">
            <h6 className='display-7-2 text-normal mb-2'>Μή περιλαμβανομενα  <span className="text-small text-secondary">(4)</span></h6>
            <ul className='list-unstyled included-list mt-3 text-secondary'>
              <li>
                <img className='included-icon' src={iconMinus} alt=""/>
                Αχθοφορικά και φιλοδωρήματα (20 € πληρωτέα κατά την άφιξη)
              </li>
              <li>
                <img className='included-icon' src={iconMinus} alt=""/>
                Οτιδήποτε αναφέρεται ως προαιρετικό ή προτεινόμενο
              </li>
              <li>
                <img className='included-icon' src={iconMinus} alt=""/>
                Έξοδα προσωπικής φύσεως, Ταξιδιωτική ασφάλεια
              </li>
              <li>
                <img className='included-icon' src={iconMinus} alt=""/>
                Φαγητό και ποτά κατά τη διάρκεια των πτήσεων της Scoot
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-10 offset-1 mt-5 mt-lg-0 offset-lg-0 col-lg-3">
          <div className="col-12 p-0 m-0">
            <img
              className='img-fluid p-0 m-0 shadow'
              src={`https://maps.googleapis.com/maps/api/staticmap?key=${process.env.MAP_API_KEY || keys.googleMapsApi}&zoom=auto&format=png&maptype=roadmap&style=element:labels%7Cvisibility:off&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:administrative.country%7Celement:geometry.fill%7Ccolor:0x58dce2&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:poi%7Cvisibility:off&style=feature:road%7Cvisibility:off&style=feature:road%7Celement:labels.text%7Cvisibility:off&style=feature:transit%7Cvisibility:off&size=480x360
              &markers=size:mid%7Ccolor:0x058cd5%7Clabel:A%7CΜπαλι
              &markers=size:mid%7Ccolor:0x058cd5%7Clabel:B%7CΤζακαρτα
              &markers=size:mid%7Ccolor:0x058cd5%7Clabel:C%7CΛομποκ`} alt=""/>

          </div>
          <div className="col-12 p-0 m-0">

            <ul className="list-unstyled locations-list p-0 m-0 mt-3">
              <li>
                <span className='text-info mr-2 text-smaller'>A</span><h3 className='display-7 d-inline-block text-bold p-0 m-0'>Μπαλι</h3>
                <div className='p-0 m-0'>
                  <div className='text-small'>
                    <div className='text-secondary'>
                      Απεχει <span className="text-bold">1293</span>km απο την αθήνα
                    </div>
                    <div className="float-right more-fix">
                      <a href="" className="link no-underline text-info text-bold">περισσοτερα</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span className='text-info mr-2 text-smaller'>B</span><h3 className='display-7 d-inline-block text-bold p-0 m-0'>Ουμπουντ</h3>
                <div className='p-0 m-0'>
                  <div className='text-small'>
                    <div className='text-secondary'>
                      Απεχει <span className="text-bold">1293</span>km απο την αθήνα
                    </div>
                    <div className="float-right more-fix">
                      <a href="" className="link text-info no-underline text-bold">περισσοτερα</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span className='text-info mr-2 text-smaller'>Γ</span><h3 className='display-7 d-inline-block text-bold p-0 m-0'>Τζακαρτα</h3>
                <div className='p-0 m-0'>
                  <div className='text-small'>
                    <div className='text-secondary'>
                      Απεχει <span className="text-bold">1293</span>km απο την αθήνα
                    </div>
                    <div className="float-right more-fix">
                      <a href="" className="link text-info no-underline text-bold">περισσοτερα</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-12 d-flex flex-wrap p-0 m-0 mt-3 mt-lg-4">
            <button className='btn btn-info tour-details-button col-12'>
              <span className="text-bold">Καντε κρατήση</span>
              <img className='btn-icon img-reverse pulse' src={iconArrowRight} alt=""/>
              <span className="btn-icon-overlay"></span>
            </button>
            <button className='btn btn-info tour-details-button col-12 mt-2'>
              <span className="text-bold">Εκτυπωστε σε PDF</span>
              <img className='btn-icon img-reverse' src={iconPrinter} alt=""/>
              <span className="btn-icon-overlay"></span>
            </button>


            {/*<button className='btn btn-info tour-details-button col-6 mt-1'>*/}
            {/*  <span className="text-bold">Καλεστε μας</span>*/}
            {/*  <img className='btn-icon img-reverse' src={iconPhone} alt=""/>*/}
            {/*</button>*/}
            {/*<button className='btn btn-info tour-details-button col-6 mt-1'>*/}
            {/*  <span className="text-bold">Email</span>*/}
            {/*  <img className='btn-icon img-reverse' src={iconEnvelope} alt=""/>*/}
            {/*</button>*/}
          </div>
      </div>
    </section>
  )
}

export default TourDetails