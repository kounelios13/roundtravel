import React, { Component } from "react"
import Image from "../general/image"
import '../../styles/image-header.scss'
import PropTypes from "prop-types"



class ImageHeader extends Component {

  constructor(props) {
    super(props)
    this.activeSlider = {}
    this.sliderInterval = {}
    this.slideDuration = 10000
    this.slideIncrement = this.slideDuration / 300
    this.sliderCurrent = 0

    this.state = {
      activeOnLoad: this.flipFromRight,
      sliderIndex: 0,
      images: this.props.images,
    }
    this.swipeRight = this.swipeRight.bind(this)
    this.swipeLeft = this.swipeLeft.bind(this)
  }


  triggerSlider(i){
    clearInterval(this.sliderInterval)
    this.sliderInterval = setInterval(()=>{
      this.sliderCurrent += this.slideIncrement
      let percentage =  (this.sliderCurrent / this.slideDuration) * 100
      if(percentage > 100){
        if(this.state.sliderIndex < this.state.images.length -1){
          this.setState({sliderIndex: this.state.sliderIndex + 1}, ()=>{
          })
          }else{
            this.setState({sliderIndex: 0}, ()=>{
            let bars = document.getElementsByClassName('insta-slider')[0].children
            for(let i = 0; i < bars.length; i++){
              bars[i].style.width = '0%'
            }
          })
          this.cleanSliderBars(this.state.sliderIndex)
          }
          clearInterval(this.sliderInterval)
          this.sliderCurrent = 0
          this.initSliderBar(this.state.sliderIndex)
      }else{
        this.activeSlider.style.width = `${percentage}%`
      }
    }, 40)
  }


  componentDidMount(){
    if(this.state.images.length > 0){
      this.initSlider()
    }
  }

  initSlider(){
    this.initSliderBar(0)
  }

  initSliderBar(i){
    this.sliderCurrent = 0
    let el = document.getElementsByClassName('insta-slider')[i]
    let newEl = document.createElement("div")
    newEl.classList.add('slider-progress-bar')
    el.appendChild(newEl)
    this.activeSlider = newEl
    this.triggerSlider(i)
  }

  swipeRight(){
    if(this.state.sliderIndex < this.state.images.length -1){
      let activeBar = document.getElementsByClassName('insta-slider')[this.state.sliderIndex]
      activeBar.children[0].style.width = '100%'
      this.setState({sliderIndex: this.state.sliderIndex +1}, ()=>{
        this.initSliderBar(this.state.sliderIndex)
      })
    }
  }

  swipeLeft(){
    if(this.state.sliderIndex > 0){
      this.setState({sliderIndex: this.state.sliderIndex -1}, ()=>{

        let bars = document.getElementsByClassName('insta-slider')[this.state.sliderIndex + 1].children
        for(let i = 0; i < bars.length; i++){
          bars[i].style.width = '0%'
        }
        bars = document.getElementsByClassName('insta-slider')[this.state.sliderIndex].children
        for(let i = 0; i < bars.length; i++){
          bars[i].style.width = '0%'
        }

        this.initSliderBar(this.state.sliderIndex)
        this.cleanSliderBars(this.state.sliderIndex)
      })
    }
  }


  cleanSliderBars(index){
    const sliders = document.getElementsByClassName('insta-slider')
    for(let i = index+1; i < this.state.images.length; i++) {
      let child = sliders[i].lastElementChild;
      while (child) {
        sliders[i].removeChild(child);
        child = sliders[i].lastElementChild;
      }
    }
  }

  render() {
    return (
      <section className='p-0 m-0 row'>
            <div className="col-12 p-0 m-0 text-center">
              <div className='col-12 title-wrapper position-absolute'>
                <figcaption>
                  <h1 className='header-title display-2 col-12 text-uppercase text-bold m-0'>{this.props.pageTitle}</h1>
                  <h3 className='header-title display-5 col-12 text-uppercase text-info text-normal'>{this.props.pageSubtitle}</h3>
                </figcaption>
              </div>
              <div onClick={this.swipeLeft} className="position-absolute left-swipe">
                &nbsp;
              </div>
              <div onClick={this.swipeRight} className="position-absolute right-swipe">
                &nbsp;
              </div>
              <div className='col-12 position-absolute progress-wrapper p-0 m-0'>
                <div className='col-12 d-flex insta-slider-wrapper'>
                  {
                    this.state.images.map((img,i)=>{
                      return (
                        <div key={i} className='flex-grow-1 insta-slider position-relative'></div>
                      )
                    })
                  }
                </div>
              </div>
              <div>
                <Image alt={this.state.images[this.state.sliderIndex].alt} className={'header-image'} fileName={this.state.images[this.state.sliderIndex].url} />
              </div>
            </div>
      </section>
    )
  }
}

ImageHeader.propTypes = {
  images: PropTypes.array.isRequired,
  pageTitle: PropTypes.string,
  pageSubtitle: PropTypes.string,
}

export default ImageHeader