import React, { Component } from "react"
import CityImage from "../city/city-image"
import '../../styles/tour-group.scss'

class TourGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tours: [
        {
          image: '4.jpg',
          title: 'Οτι καλυτερο',
          price: '40€'
        },
        {
          image: '3.jpg',
          title: 'Οτι καλυτερο',
          price: '40€'
        },
        {
          image: '2.jpg',
          title: 'Οτι καλυτερο',
          price: '40€'
        },
        {
          image: '1.jpg',
          title: 'Οτι καλυτερο',
          price: '40€'
        }
      ]
    }
  }


  render() {
    return (
      <div className='row'>
        <div className="col-12 py-6">
          <h2>Οι πιο αγαπημενες εκδρομες</h2>
        </div>
        <div className='col-12 d-flex tour-group-wrapper'>

          {this.state.tours.map(tour=>{
            return (
              <div className="col-8 offset-2 p-0">
                <CityImage className={'col-12 tour-group-image img-fit p-0 m-0'} fileName={tour.image} alt=""/>
                <div className='tour-group-price'>
                  <p>350€</p>
                </div>
                <h3 className={'display-6 text-uppercase'}>Ταξιδι στο παρισι</h3>
              </div>
            )
          })}
        </div>

      </div>
    )
  }
}

export default TourGroup