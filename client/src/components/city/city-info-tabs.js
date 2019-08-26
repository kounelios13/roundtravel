import React from "react"
import "react-tabs/style/react-tabs.css"
import "../../styles/city/city-info-tabs.scss"
import InfoTabs from "../general/info-tabs"

const CityInfoTabs = (props) => {
  return (
    <section className='col-10 offset-1 col-lg-8 offset-lg-2 mt-6'>
      <div className={'m-0 p-0'}>
        <div className="col-12 space-candy">
          <h2 className='display-5 m-0 text-bold'>{props.infoTitle}</h2>
          <h4 className='display-8 m-1'>{props.infoSubtitle}</h4>
        </div>
        <InfoTabs tabInfo={props.cityInfo} />
      </div>
    </section>
  )
}

export default CityInfoTabs