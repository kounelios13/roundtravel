import React, { Component } from "react"
import Datepicker from "../general/datepicker"
import iconStar from '../../images/icon-star.svg'
import '../../styles/tours/tour-pricing.scss'
import iconLeft from '../../images/icon-arrow-left.svg'
import iconEdit from '../../images/icon-calendar.svg'

class TourPricing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayedDate: new Date(),
      datepickerOff: true
    }
    this.setDisplayedDate = this.setDisplayedDate.bind(this)
  }

  setDisplayedDate(date){
    this.setState({displayedDate: date}, ()=>{
      this.setState({datepickerOff: true})
    })
  }


  render() {
    return (
      <div className="col-12 mt-3 p-4 shadow border-top-primary d-flex flex-wrap tour-price-table">
        <h4 className='display-7-2 text-normal mb-2 col-12'>Τικοματαλογος</h4>
        <div className="col-12 d-flex overflow-hidden mt-3 p-0 m-0">
          <Datepicker className={`${this.state.datepickerOff ? 'datepicker-off' : ''} m-5 togglableDatepicker`} displayDateUpdated={this.setDisplayedDate} />
            <div className={`col-12 p-0 tour-pricing ${this.state.datepickerOff ? '' : 'pricing-table-off'}`}>
              <div className="col-12">
                <div className="float-right display-9">
                   <time dateTime={this.state.displayedDate}>{this.state.displayedDate.toLocaleDateString('el-GR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </div>
              </div>
              <table className="table tour-pricing-table">
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
                    Marcella Limited Supreme
                    <div>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                    </div>
                  </th>
                  <td><span className="mark-price euro-sign">1160</span></td>
                  <td className='euro-sign'>1640</td>
                  <td className='euro-sign'>840</td>
                </tr>
                <tr>
                  <th scope="row">
                    Yves Sacred Holly Hills
                    <div>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                    </div>
                  </th>
                  <td className='euro-sign'>1240</td>
                  <td className='euro-sign'>1640</td>
                  <td className='euro-sign'>440</td>
                </tr>
                <tr>
                  <th scope="row">
                    Yates Luxury Resort
                    <div>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                      <img className='hotel-star-icon' src={iconStar} alt=""/>
                    </div>
                  </th>
                  <td className='euro-sign'>1440</td>
                  <td className='euro-sign'>1940</td>
                  <td className='euro-sign'>540</td>
                </tr>
                </tbody>
              </table>
            </div>
        </div>
        <div className="col-12 p-0 m-0">
          <div className="float-right">
            <div onClick={()=>{this.setState({datepickerOff: !this.state.datepickerOff})}}
                 className={`display-9 text-secondary date-button ${this.state.datepickerOff ? '' : 'date-button--pressed'}`}>
              <img className='btn-back-icon' src={iconLeft} alt=""/>{this.state.datepickerOff ? 'Δείτε ημερομηνίες αναχωρήσεων' : 'Επιστροφη στον τιμοκαταλογο'}<img className='btn-calendar-icon' src={iconEdit} alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TourPricing