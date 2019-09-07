import React from "react"
import '../../styles/tours/tour-reviews.scss'

const TourReviews = () => {
  return (
      <section className="bg-light col-12 p-5 my-6 text-center">
        <h3 className='display-6 pt-4'>Σχολια πελατων για την εκδρομη</h3>

        <div className="col-6 offset-3 p-3 reviews">
          <span className="display-7">Αντιγωνη Χομπιτη</span>
          <div className='mt-2'>
            Ταξιδεψαμε στο Παρισι κ μονο θετικα σχολια εχουμε.
            Η κ. Κατερινα κ ολοι οι εργαζομενοι ειναι αψογοι. Ο Γιωργος Καλαμποκας που μας συνοδευε ηταν εξαιρετικος κ παντα διπλα μας.
            Σας ευχαριστουμε πολυ για την ομορφη εμπειρια που μας προσφερατε.
            Σιγουρα θα τα ξαναπουμε κ ευχομαι παντα με τον επαγγελματισμο κ την ανθρωπια σας να μας χαριζετε μοναδικες στιγμες!!!❤❤❤
          </div>

          <div className='text-right col-12 float-right mt-3'>
            <div className="float-right">
              Διαβαστε στο facebook
            </div>
          </div>
        </div>
      </section>
  )
}

export default TourReviews