import React, { Component } from "react"
import CityImage from "../city/city-image"
import '../../styles/tours/tour-group.scss'
  import plane from '../../images/general/icons/plane.svg'
import planet from '../../images/general/icons/planet.svg'
import person from '../../images/general/icons/person.svg'

class TourGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tours: [
        {
          image: '2.jpg',
          title: 'DISNEYLAND - ΠΑΡΙΣΙ ΑΠΟ ΗΡΑΚΛΕΙΟ',
          price: '40€'
        },
        {
          image: '3.jpg',
          title: 'ΜΠΑΛΙ SPECIAL OFFER',
          price: '40€'
        },
        {
          image: '4.jpg',
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
      <section className='row mt-5'>
        <div className="d-flex flex-wrap py-6 col-12 p-0">
          <div className="col-8 offset-1 p-0 offset-lg-2 d-flex flex-wrap">
            <div className="col-12 space-candy mb-3">
              <h2 className='display-5 m-0 text-bold'>Εκδρομες που προτινουμε.</h2>
              <h4 className='display-8 m-1'>Ανακαλυψτε τα μυστικα του Παρισιου</h4>
            </div>
          </div>
          <div className='col-12 offset-0 col-lg-8 offset-lg-2 d-flex px-0 tour-group-wrapper app-pointer'>
            {this.state.tours.map((tour, i)=>{
              return (
                <div key={i} className='tour-block col-10 offset-1 col-md-4 offset-md-0 p-0'>
                  <div className="col-12 p-0">
                    <CityImage className='col-12 tour-group-image img-fit p-0 m-0' fileName={tour.image} alt=""/>
                    <div className='tour-group-price'>
                      <p><span>350</span><span className='euro-sign'>€</span></p>
                    </div>
                    <div className="tour-group-icon-container no-drag">
                      <div className='d-flex flex-wrap'>
                        <div className="col-12">
                          <img className='tour-group-icon rounded-circle mb-1' src={planet} alt=""/>
                        </div>
                        <div className="col-12">
                          <img className='tour-group-icon rounded-circle mb-1' src={person} alt=""/>
                        </div>
                        <div className="col-12">
                          <img className='tour-group-icon rounded-circle mb-1' src={plane} alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex p-0 flex-wrap bg-light tour-info-container">
                    <div className="col-12 p-2">
                      <h3 className='display-8 text-bold m-0'>{tour.title}</h3>
                    </div>
                  </div>
                  <hr/>

                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default TourGroup