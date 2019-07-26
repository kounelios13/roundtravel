import React, { Component } from "react"
import CityImage from "../city/city-image"
import '../../styles/image-header.scss'



class ImageHeader extends Component {

  constructor(props) {
    super(props)

    this.activeSlider = {}
    this.sliderInterval = {}
    this.sliderIndex = 0
    this.slideDuration = 10000
    this.slideIncrement = this.slideDuration / 100
    this.sliderCurrent = 0
    this.state = {
      images: [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
        'https://images.unsplash.com/photo-1512853243713-6db02ed2237a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
      ]
    }
  }

  triggerSlider(i){
    this.sliderInterval = setInterval(()=>{
      this.sliderCurrent += this.slideIncrement
      let percentage =  (this.sliderCurrent / this.slideDuration) * 100
      this.activeSlider.style.width = `${percentage}%`
        if(this.sliderCurrent > this.slideDuration){
            if(this.sliderIndex < this.state.images.length -1){
              this.sliderIndex++
            }else{
              this.sliderIndex = 0
              this.cleanSliderBars()
            }
            clearInterval(this.sliderInterval)
            this.sliderCurrent = 0
            this.initSliderBar(this.sliderIndex)
        }
    }, this.slideIncrement)
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
    console.log(i)
    let el = document.getElementsByClassName('insta-slider')[i]
    let newEl = document.createElement("div")
    newEl.classList.add('slider-progress-bar')
    el.appendChild(newEl)
    this.activeSlider = newEl
    this.triggerSlider(i)
  }



  cleanSliderBars(){
    let bars = document.getElementsByClassName('slider-progress-bar')
    for(let i = 0; i < bars.length; i++){
      bars[i].parentNode.removeChild(bars[i])
    }
  }

  render() {
    return (
      <div>
        <div className='row p-0 m-0'>
          <div className="col-12 p-0 m-0 text-center">
            <div className='col-12 title-wrapper position-absolute'>
              <h1 className='header-title display-4 col-12'>Ταξιδι στο παρισι</h1>
            </div>
            <div className='col-12 position-absolute progress-wrapper p-0 m-0'>
              <div className='col-12 d-flex insta-slider-wrapper'>
                {
                  this.state.images.map(img=>{
                    return (
                      <div className='flex-grow-1 insta-slider position-relative'>&nbsp;</div>
                    )
                  })
                }
              </div>
            </div>
            <div>
              {console.log(this.props.fileName)}
              <CityImage className={'header-image'} fileName={this.props.fileName} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageHeader