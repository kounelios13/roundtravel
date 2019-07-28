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
          title: 'Υπερπροσφόρα καλοκαίριου Παρίσι, Disney early booking απ ευθείας απο Ηράκλειο',
          price: '40€'
        },
        {
          image: '3.jpg',
          title: 'ΜΠΑΛΙ SPECIAL OFFER',
          price: '40€'
        },
        {
          image: '2.jpg',
          title: 'ΒΟΥΔΑΠΕΣΤΗ - ΠΡΑΓΑ - ΔΡΕΣΔΗ - ΒΙΕΝΝΗ',
          price: '40€'
        },
        {
          image: '1.jpg',
          title: 'ΠΟΛΩΝΙΑ-ΒΙΕΝΝΗ ΚΑΛΟΚΑΙΡΙ 2019',
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
        <div className='col-10 offset-1 col-lg-8 offset-lg-2 d-flex px-0 pb-6 tour-group-wrapper'>
            {this.state.tours.map((tour, i)=>{
              return (
                <div key={i} className='tour-block col-10 offset-1 col-md-4 offset-md-0 p-0'>
                  <CityImage className='col-12 tour-group-image img-fit p-0 m-0' fileName={tour.image} alt=""/>
                  <div className='tour-group-price'>
                    <p>350€</p>
                  </div>
                  <h3 className='display-7 p-2 tour-group-title text-center'>{tour.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
    )
  }
}

export default TourGroup