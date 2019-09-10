import '../../styles/tours/tour-reviews.scss'
import arrowLeft from '../../images/icon-arrow-left.svg'
import arrowRight from '../../images/icon-arrow-right.svg'
import React, { Component } from "react"


class TourReviews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewIndex: 0,
      reviews: [
        {
          name: 'Αντιγονη Χομπιτη',
          text: `Ταξιδεψαμε στο Παρισι κ μονο θετικα σχολια εχουμε.
              Η κ. Κατερινα κ ολοι οι εργαζομενοι ειναι αψογοι. Ο Γιωργος Καλαμποκας που μας συνοδευε ηταν εξαιρετικος κ παντα διπλα μας.
              Σας ευχαριστουμε πολυ για την ομορφη εμπειρια που μας προσφερατε.
              Σιγουρα θα τα ξαναπουμε κ ευχομαι παντα με τον επαγγελματισμο κ την ανθρωπια σας να μας χαριζετε μοναδικες στιγμες!!!❤❤❤`,
          mean: 'Facebook',
          link: 'fb.com'
        },
        {
          name: 'Γιαννης Μακης',
          text: `Ταξιδεψαμε στο Παρισι κ μονο θετικα σχολια εχουμε.
              Σιγουρα θα τα ξαναπουμε κ ευχομαι παντα με τον επαγγελματισμο κ την ανθρωπια σας να μας χαριζετε μοναδικες στιγμες!!!❤❤❤`,
          mean: 'Google',
          link: 'fb.com'
        },
        {
          name: 'Γιωργος Κορομπος',
          text: `Ταξιδεψαμε στο Παρισι κ μονο θετικα σχολια εχουμε.`,
          mean: 'Facebook',
          link: 'fb.com'
        }
      ]
    }

    this.incrementIndex = this.incrementIndex.bind(this)
    this.decrementIndex = this.decrementIndex.bind(this)
  }

  incrementIndex(){
    if(this.state.reviewIndex + 2 > this.state.reviews.length){
      return
    }
    this.setState({reviewIndex: (this.state.reviewIndex + 1)})
  }

  decrementIndex(){
    if(this.state.reviewIndex -1 < 0){
      return
    }
    this.setState({reviewIndex: (this.state.reviewIndex -1)})
  }


  render() {
    return (
      <section className="bg-light-2 d-flex p-5">
        <div className="col-12 col-lg-6 offset-lg-3">
          <div className="col-12">
            <h3 className='m-0 display-6'>Σχολια πελατων για την εκδρομη</h3>
            <h4 className='m-0 display-7 text-normal'>Διαβαστε για εμπειριες αλλων...</h4>
          </div>
          <div className="col-12 reviews text-center">
            <h4 className="display-8 mb-0 mt-5 text-secondary-2">{this.state.reviews[this.state.reviewIndex].name}</h4>
            <article>
              {this.state.reviews[this.state.reviewIndex].text}
            </article>
            <div className="col-12 link">
              <div className="text-right mt-3 col-12 float-right">
                <div className="float-right">
                  Διαβαστε στο {this.state.reviews[this.state.reviewIndex].mean}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center reviews-browse">
            <div className={`d-inline reviews-icon ${this.state.reviewIndex -1 < 0 ? `reviews-icon-hidden` : ``}`} onClick={this.decrementIndex}>
              <img src={arrowLeft} className='reviews-icon-img' alt=""/>
            </div>
            <span>Βλέπετε ({this.state.reviewIndex + 1}/{this.state.reviews.length})</span>
            <div className={`d-inline reviews-icon ${(this.state.reviewIndex + 2 > this.state.reviews.length) ? `reviews-icon-hidden` : ``}`} onClick={this.incrementIndex}>
              <img className='reviews-icon-img' src={arrowRight} alt=""/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TourReviews