import React from "react"
import iconCheck from "../../images/icon-check.svg"
import iconMinus from "../../images/icon-minus.svg"

const TourIncluded = () => {
  return (
    <div className="col-12 mt-5 shadow p-4 border-top-primary">
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
  )
}

export default TourIncluded