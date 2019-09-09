import React from "react"
import '../../styles/tours/tour-reviews.scss'

const TourReviews = () => {
  return (
      <section className="bg-light d-flex flex-wrap p-5">
        <div className="col-12 col-lg-6 offset-lg-3">
          <div className="col-12">
            <h3 className='m-0 display-6'>Σχολια πελατων για την εκδρομη</h3>
            <h4 className='m-0 display-7 text-normal'>Διαβαστε τι εχουν να πουν οι αλλοι...</h4>
          </div>
          <div className="col-12 reviews text-center">
            <h4 className="display-8 mb-0 mt-5">Αντιγονη Χομπιτη</h4>
            <article>
              Ταξιδεψαμε στο Παρισι κ μονο θετικα σχολια εχουμε.
              Η κ. Κατερινα κ ολοι οι εργαζομενοι ειναι αψογοι. Ο Γιωργος Καλαμποκας που μας συνοδευε ηταν εξαιρετικος κ παντα διπλα μας.
              Σας ευχαριστουμε πολυ για την ομορφη εμπειρια που μας προσφερατε.
              Σιγουρα θα τα ξαναπουμε κ ευχομαι παντα με τον επαγγελματισμο κ την ανθρωπια σας να μας χαριζετε μοναδικες στιγμες!!!❤❤❤
            </article>
            <div className="col-12 link">
              <div className="text-right mt-3 col-12 float-right">
                <div className="float-right">
                  Διαβαστε στο facebook
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TourReviews