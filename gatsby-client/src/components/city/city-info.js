import React from "react"
import '../../styles/global.scss'
import '../../styles/city/city-info.scss'
import CityImage from "./city-image"
import ShowMore from 'react-show-more';
import CityBgImage from "./city-bg-image"

const CityInfo = () => {
  const content = <div className='city-info-wrapper text-white'>
    <h3 className='display-5 city-info-title'>Πολη του φωτος</h3>
    <article className={'text-light'}>
      <ShowMore
        lines={3}
        more='Δείτε περισσότερα'
        less='Show less'
        anchorClass='app-show-more'
      >
        {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam autem, beatae dolores iste labore quasi recusandae totam? Aliquid, autem deserunt, earum, expedita ipsum itaque iusto laborum nobis optio quae quam quos sunt suscipit! A ad adipisci aliquid aspernatur aut cum, cupiditate enim eos eveniet expedita fuga fugiat illum impedit incidunt inventore ipsum iste labore laborum modi nihil nobis non pariatur perferendis porro quidem quis quos recusandae rem reprehenderit sapiente suscipit tempora temporibus tenetur ullam vel veniam voluptatum! Consequatur corporis dignissimos nam nesciunt nihil quo recusandae ut? Eaque provident, rem. Autem eius eligendi eos itaque magnam perferendis quaerat quasi, velit. Aliquam asperiores assumenda cumque deserunt dicta ea explicabo, facilis illo iste iusto molestias natus odio quibusdam, ratione repellendus sint tempora tempore temporibus veritatis voluptas! Ab asperiores eum expedita explicabo hic iure libero optio qui quibusdam voluptatem? Animi expedita ipsum mollitia sint veritatis. Deserunt exercitationem harum iure labore maxime, minus molestias nobis officia pariatur, quam tempore vero? A aspernatur delectus doloremque eos incidunt ipsum nemo officia, qui quia vero. Accusamus at autem consectetur consequuntur dolorum, ea est eveniet expedita explicabo fugiat id impedit in labore laborum modi molestiae nisi, nostrum porro provident qui similique voluptate voluptatum. Architecto itaque non numquam officiis.'}
      </ShowMore>
    </article>
  </div>

  return (
    <CityBgImage children={content} className={'city-info-image my-5'} fileName={'2.jpg'} />
  )
}

export default CityInfo