import React from "react"
import CityImage from "../city/city-image"
import '../../styles/image-header.scss'


const ImageHeader = (props) => {
  console.log(props.fileName)
  return (
    <div>
      <div className='position-absolute'>
        <h1 className='header-title'>Ταξιδι στο παρισι</h1>
      </div>
      <CityImage className={'header-image'} fileName={props.fileName} />

    </div>
  )
}



export default ImageHeader