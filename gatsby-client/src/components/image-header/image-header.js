import React, { Component } from "react"
import CityImage from "../city/city-image"
import '../../styles/image-header.scss'



class ImageHeader extends Component {

  componentDidMount() {
    const meters = document.querySelectorAll('svg[data-value] .meter');

    meters.forEach( (path) => {
      // Get the length of the path
      let length = path.getTotalLength();

      // console.log(length) and hardcode the value for both stroke-dasharray & stroke-dashoffest styles
      // If unable to hardcode, set dynamically...
      // path.style.strokeDashoffset = length;
      // path.style.strokeDasharray = length;

      // Get the value of the meter
      let value = parseInt(path.parentNode.getAttribute('data-value'));
      // Calculate the percentage of the total length
      let to = length * ((100 - value) / 100);

      // Trigger Layout in Safari hack https://jakearchibald.com/2013/animated-line-drawing-svg/
      path.getBoundingClientRect();
      // Set the Offset
      path.style.strokeDashoffset = Math.max(0, to);
    });
  }

  render() {
    return (
      <div>
        <div className='row p-0 m-0'>
          <div className="col-12 p-0 m-0 text-center">
            <div className='col-12 title-wrapper position-absolute'>
              <h1 className='header-title display-4 col-12'>Ταξιδι στο παρισι</h1>
            </div>
            <div className='col-12 position-absolute progress-wrapper'>
              <div className='col-12 d-flex'>
                <svg viewBox="0 0 1 1" className='progress-path' width="300" height="20" data-value="20">
                  <path className="bg" stroke="#ccc" d="M0 10, 200 10"></path>
                  <path className="meter" stroke="#09c" d="M0 10, 200 10"></path>
                </svg>
              </div>
            </div>
            <div>
              <CityImage className={'header-image'} fileName={this.props.fileName} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageHeader