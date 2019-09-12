import React, { Component } from "react"
import Image from "../general/image"
import '../../styles/tours/tour-group.scss'
import PropTypes from "prop-types";
import play from '../../images/icon-arrow-left-2.svg'


class TourGroup extends Component {
  constructor(props) {
    super(props)
    this.tourGroup = React.createRef()
    this.state = {
      tours: this.props.tours,
      activeIndex: 0
    }

    this.increaseIndex = this.increaseIndex.bind(this)
    this.decreaseIndex = this.decreaseIndex.bind(this)
  }

  increaseIndex(){

      // this.setState({activeIndex: this.state.activeIndex + 1})
      // this.tourGroup.current.style
      let tourGroupSize = this.tourGroup.current.scrollWidth
      let scrollOfsset = tourGroupSize / this.state.tours.length
      console.log(scrollOfsset)
      this.tourGroup.current.scrollBy(scrollOfsset, 0);

  }

  decreaseIndex(){

  }


  render() {
    return (
      <section className='mt-5'>
        <div className="d-flex flex-wrap py-6 col-12 p-0">
          <div className="col-8 offset-1 p-0 offset-lg-2 d-flex flex-wrap">
            <div className="col-12 mb-3 p-0">
              <h2 className='display-5 m-0 text-bold'>{this.props.suggestedTitle}</h2>
              <h4 className='display-8 m-1'>{this.props.suggestedSubtitle}</h4>
            </div>
          </div>
          <div ref={this.tourGroup} className='col-12 offset-0 col-lg-8 offset-lg-2 d-flex px-0 tour-group-wrapper app-pointer'>
            {
              this.state.tours.map((tour, i)=>{
              return (
                <div key={i} className={`tour-block col-10 offset-1 col-md-4 offset-md-0 p-0 ${(i +1) ===this.state.tours.length ? `offset-2` : ``}`}>
                  <div className="col-12 p-0">
                    <Image className='col-12 tour-group-image img-fit p-0 m-0' fileName={tour.image} alt=""/>
                    <div className='tour-group-price'>
                      <p><span className='euro-sign'>350</span></p>
                    </div>
                    {/*<div className="tour-group-icon-container no-drag">*/}
                    {/*  <div className='d-flex flex-wrap'>*/}
                    {/*    <div className="col-12">*/}
                    {/*      <img className='tour-group-icon rounded-circle mb-1' src={planet} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-12">*/}
                    {/*      <img className='tour-group-icon rounded-circle mb-1' src={person} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-12">*/}
                    {/*      <img className='tour-group-icon rounded-circle mb-1' src={plane} alt=""/>*/}
                    {/*    </div>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </div>
                  <div className="col-12 d-flex p-0 flex-wrap bg-light tour-info-container">
                    <div className="col-12 p-2">
                      <h3 className='display-8 text-bold m-0 text-uppercase'>{tour.title}</h3>
                    </div>
                  </div>
                  <hr/>
                </div>
              )
            })}
          </div>

          <div className="col-12 tour-group-arrows-wrapper">
            <div className="tour-group-arrows">
              <div className='tour-group-arrow tour-group-arrow__left'>
                <img src={play} alt="" className="tour-group-arrow__img"/>
              </div>
              <div className='tour-group-arrow tour-group-arrow__right' onClick={this.increaseIndex}>
                <img className='tour-group-arrow__img' src={play} alt=""/>
              </div>
            </div>
          </div>

          <div className="col-12 bg-info text-center d-none d-md-block">
            {
              [...Array(this.state.tours.length)].map((x, i)=>{
                return (
                  <div>asodk</div>
                )
              })
            }
          </div>
        </div>
      </section>
    )
  }
}

TourGroup.propTypes = {
  tours: PropTypes.array.isRequired,
  suggestedTitle: PropTypes.string.isRequired,
  suggestedSubtitle: PropTypes.string.isRequired
}


export default TourGroup