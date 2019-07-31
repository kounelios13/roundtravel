import React from "react"
import '../../styles/global.scss'
import '../../styles/city/city-info.scss'
import CityImage from "./city-image"
import ShowMore from 'react-show-more';
import CityBgImage from "./city-bg-image"

const CityInfo = () => {
  const content = <div className='text-white col-10 offset-1 col-lg-8 offset-lg-2 p-lg-6'>
    <h3 className='display-5 city-info-title'>Πολη του φωτος</h3>
    <article className={'text-light'}>
      <ShowMore
        lines={5}
        more='Διαβάστε περισσότερα'
        less='Απόκρυψη'
        anchorClass='app-show-more'
      >
        {
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti doloribus enim laboriosam nulla quasi reprehenderit voluptate. Ad culpa, dolorem doloremque ea earum exercitationem impedit itaque labore laudantium minus nobis, officiis optio pariatur praesentium ratione rem totam ullam unde! Adipisci alias architecto, autem consequatur culpa cum cupiditate dignissimos doloribus eius est in iusto nesciunt nobis, optio pariatur qui quo repellat reprehenderit similique tempora temporibus ullam velit veniam veritatis vitae. Autem fugiat hic iusto nulla quis? Blanditiis, commodi est fugit hic nihil nisi placeat reiciendis sapiente sint velit! A ad aspernatur consequatur culpa cumque delectus deserunt dignissimos dolor earum enim excepturi facere incidunt iste itaque nam nostrum odit officia, optio perspiciatis placeat recusandae reiciendis saepe sapiente similique tenetur velit voluptatem. Accusamus accusantium aliquam architecto aspernatur consectetur dignissimos dolore eum exercitationem ipsum magni necessitatibus nesciunt, officia porro quidem quod sunt vitae? A aspernatur consectetur cupiditate dolor maiores mollitia, quae quas vero? Dolores modi, mollitia. Adipisci, reiciendis, repudiandae. Accusamus amet aut, distinctio error, ex labore maiores modi numquam optio placeat quae quidem repellendus soluta, temporibus voluptatem! Delectus eveniet quisquam quod repudiandae soluta vero voluptate voluptatum. Aspernatur, beatae deserunt dignissimos distinctio ea error est et fuga ipsum laudantium nostrum perferendis reiciendis sint temporibus ut voluptates voluptatibus? Ab asperiores cum delectus deleniti, dicta fuga id omnis provident quas veniam veritatis voluptate? Alias amet assumenda autem cumque, dolor ducimus eos illo laboriosam omnis pariatur perspiciatis porro repellat repellendus sunt totam unde velit. Consequuntur eos odio quisquam voluptates. Alias cupiditate debitis dicta, doloribus et in inventore laboriosam maxime molestiae nesciunt nostrum obcaecati optio porro praesentium quo rem unde, vitae. Asperiores blanditiis impedit magnam perspiciatis saepe sequi temporibus! Blanditiis dolore doloribus hic id laborum possimus. Fuga iste numquam sapiente sed voluptatum! Culpa, cum debitis deserunt dolores ducimus impedit odio odit quod repellendus repudiandae suscipit voluptates? Dolorum pariatur, voluptatum.'
        }
      </ShowMore>
    </article>
  </div>

  return (
    <section>
      <CityBgImage children={content} className={'city-info-image img-filter my-5 '} fileName={'2.jpg'} />
    </section>
  )
}

export default CityInfo