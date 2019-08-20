import React, { Component } from "react"
import Image from "./image"
import '../../styles/points-of-interest.scss'

class Sights extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      activeIndex: 0
    }
    this.setActiveIndex = this.setActiveIndex.bind(this)
  }

  setActiveIndex(i){
    this.setState({activeIndex: i})
    if(document.documentElement.clientWidth < 700){
      document.getElementById('point-article').scrollIntoView()
    }
  }


  render() {
    return (
      <section className='row mb-5'>
        <div className="col-10 offset-1 col-lg-8 offset-lg-2 d-flex flex-wrap my-5 p-0">
          <div className="col-12 space-candy my-4">
            <h2 className='display-5 m-0 text-bold'>{this.props.sightsTitle}</h2>
            <h4 className='display-8 m-1'>{this.props.sightsSubtitle}</h4>
          </div>
          <div className="col-12 d-flex flex-wrap mt-2 p-0">
            <div className="col-12 col-lg-5 d-flex flex-wrap p-0 align-self-start">
              {
                this.props.sights.map((point, i)=>{
                  let activeClass = (i === this.state.activeIndex) ? 'border-left-active' : ''
                  return (
                    <div onClick={()=>{this.setActiveIndex(i)}} key={i} className={`app-pointer d-flex flex-wrap col-12 p-0 border-right ${activeClass}`}>
                      <div className="col-4 p-0 m-0">
                          <Image className='col-12 p-0 m-0 img-fit interest-point-image img-hover' alt={point.alt} fileName={point.photoUrl} />
                      </div>

                      <div className="col-8 p-1 m-0">
                        <h4 className='p-0 m-0 display-8 text-bold'>{point.name}</h4>
                        <p className='m-0 p-0 interest-point-short-description'>{point.description}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            <div id='point-article' className="col-12 pl-0 col-lg-7 p-0 mt-5 pl-lg-5 mt-lg-0">
              <h4 className='display-5 text-bold'>{this.props.sights[this.state.activeIndex].name}</h4>
              <article>
                {this.props.sights[this.state.activeIndex].description}
              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Sights