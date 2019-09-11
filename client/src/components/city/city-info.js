import React from "react"
import '../../styles/global.scss'
import '../../styles/city/city-info.scss'
import ShowMore from 'react-show-more';
import BgImage from "../general/bg-image"
import PropTypes from "prop-types";

const CityInfo = (props) => {
  const content =
    <section className='text-white col-10 offset-1 col-lg-8 offset-lg-2 p-lg-6'>
    <h3 className='display-5 city-info-title'>{props.descriptionTitle}</h3>
    <article className='text-light'>
      <ShowMore
        lines={5}
        more='Διαβάστε περισσότερα'
        less='Απόκρυψη'
        anchorClass='app-show-more'
      >
        {props.description}
      </ShowMore>
    </article>
  </section>

  return (
    <section>
      <BgImage children={content} className={'city-info-image img-filter my-5 '} fileName={'paris-eiffel-3.jpg'} />
    </section>
  )
}

CityInfo.propTypes = {
  descriptionTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired
}

export default CityInfo