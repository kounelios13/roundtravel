import React, { Component } from "react"
import Datepicker from "../../components/general/datepicker"
import iconStar from '../../images/icon-star.svg'

class TourPricing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayedDate: new Date()
    }
    this.setDisplayedDate = this.setDisplayedDate.bind(this)
  }

  setDisplayedDate(date){
    this.setState({displayedDate: date}, ()=>{
      console.log(this.state.displayedDate)
    })
  }


  render() {
    return (
      <div className="col-12 mt-3 p-4 shadow border-top-primary d-flex flex-wrap tour-price-table">
        <h4 className='display-7-2 text-normal mb-2 col-12'>Τικοματαλογος</h4>
          {/*<Datepicker updateDisplayedDate={this.setDisplayedDate} />*/}
          <div className="col-12 mt-3">
              <div className="text-bold">
                <div className='d-inline'>
                  Καταλογος:
                  <time className='ml-1' dateTime={this.state.displayedDate}>
                    {this.state.displayedDate.toLocaleDateString()}
                  </time>
                </div>
                <div className='d-inline float-right'>
                  aerae
                </div>
              <div>
                <table className="table">
                  <thead className="thead-dark">
                  <tr>
                    <th scope="col">Όνομα</th>
                    <th scope="col">Δικλινο</th>
                    <th scope="col">Μονοκλινο</th>
                    <th scope="col">Παιδι</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">
                      Marcella Lites Deluxe
                      <div>
                        <img className='hotel-star-icon' src={iconStar} alt=""/>
                        <img className='hotel-star-icon' src={iconStar} alt=""/>
                        <img className='hotel-star-icon' src={iconStar} alt=""/>
                        <img className='hotel-star-icon' src={iconStar} alt=""/>
                        <img className='hotel-star-icon' src={iconStar} alt=""/>
                      </div>
                    </th>
                    <td className='euro-sign'>1140</td>
                    <td className='euro-sign'>1640</td>
                    <td className='euro-sign'>840</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Yates luxury
                      <div>
                        <img className='hotel-star-icon' src={iconStar} alt=""/>
                        <img className='hotel-star-icon' src={iconStar} alt=""/>
                        <img className='hotel-star-icon' src={iconStar} alt=""/>
                        <img className='hotel-star-icon' src={iconStar} alt=""/>
                      </div>
                    </th>
                    <td className='euro-sign'>1240</td>
                    <td className='euro-sign'>1640</td>
                    <td className='euro-sign'>840</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Sunset wonders
                      <div>
                        <img className='hotel-star-icon' src={iconStar} alt=""/>
                        <img className='hotel-star-icon' src={iconStar} alt=""/>
                        <img className='hotel-star-icon' src={iconStar} alt=""/>
                        <img className='hotel-star-icon' src={iconStar} alt=""/>
                      </div>
                    </th>
                    <td className='euro-sign'>1440</td>
                    <td className='euro-sign'>1940</td>
                    <td className='euro-sign'>840</td>
                  </tr>
                  </tbody>
                </table>


              </div>
            </div>

          </div>
      </div>
    )
  }
}

export default TourPricing