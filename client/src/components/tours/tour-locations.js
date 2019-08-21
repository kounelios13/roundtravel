import React from "react"
import keys from "../../env/keys/maps.keys"

const TourLocations = () => {
  return (
    <div className="col-12 d-flex flex-wrap shadow p-0">
      <div className="col-12 p-0 m-0">
        <img
          className='img-fluid p-0 m-0'
          src={`https://maps.googleapis.com/maps/api/staticmap?key=${process.env.MAP_API_KEY || keys.googleMapsApi}&zoom=auto&format=png&maptype=roadmap&style=element:labels%7Cvisibility:off&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:administrative.country%7Celement:geometry.fill%7Ccolor:0x58dce2&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:poi%7Cvisibility:off&style=feature:road%7Cvisibility:off&style=feature:road%7Celement:labels.text%7Cvisibility:off&style=feature:transit%7Cvisibility:off&size=480x360
                      &markers=size:mid%7Ccolor:0x058cd5%7Clabel:A%7CΜπαλι
                      &markers=size:mid%7Ccolor:0x058cd5%7Clabel:B%7CΤζακαρτα
                      &markers=size:mid%7Ccolor:0x058cd5%7Clabel:C%7CΛομποκ`}
          alt=""
        />
      </div>
      <div className="col-12 p-0 m-0">
        <ul className="list-unstyled locations-list p-0 m-0 mt-3">
          <li>
            <span className='text-info mr-2 text-smaller'>A</span><h3 className='display-7 d-inline-block text-normal p-0 m-0'>Μπαλι</h3>
            <div className='p-0 m-0'>
              <div className='text-small'>
                <div className='text-secondary'>
                  Απεχει <span className="text-bold">1293</span>km απο την αθήνα
                </div>
                <div className="float-right more-fix">
                  <a href="" className="link no-underline text-info text-bold">περισσοτερα</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <span className='text-info mr-2 text-smaller'>B</span><h3 className='display-7 d-inline-block text-normal p-0 m-0'>Ουμπουντ</h3>
            <div className='p-0 m-0'>
              <div className='text-small'>
                <div className='text-secondary'>
                  Απεχει <span className="text-bold">1293</span>km απο την αθήνα
                </div>
                <div className="float-right more-fix">
                  <a href="" className="link text-info no-underline text-bold">περισσοτερα</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <span className='text-info mr-2 text-smaller'>Γ</span><h3 className='display-7 d-inline-block text-normal p-0 m-0'>Τζακαρτα</h3>
            <div className='p-0 m-0'>
              <div className='text-small'>
                <div className='text-secondary'>
                  Απεχει <span className="text-bold">1293</span>km απο την αθήνα
                </div>
                <div className="float-right more-fix">
                  <a href="" className="link text-info no-underline text-bold">περισσοτερα</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TourLocations