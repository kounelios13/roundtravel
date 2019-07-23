import React from "react"
import CityImage from "./city-image"

const City = (props) => {
  console.log(props)
  return (
    <div>
        Hey from city
      <CityImage parentDir='city' fileName='1.jpg' />
    </div>
  )
}

export default City