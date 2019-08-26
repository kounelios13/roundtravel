import React, { Component } from "react"
import Image from "../general/image"
import '../../styles/tours/tour-cities.scss'
import BgImage from "../general/bg-image"
import ShowMore from "react-show-more"
import InfoTabs from "../general/info-tabs"
import iconArrowLeft from '../../images/icon-arrow-left.svg'

class TourCities extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }


  render() {
    const cities = [
      {
        name: 'Μπαλι',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aspernatur atque corporis dicta dignissimos doloribus eligendi et fuga ipsa itaque magni modi mollitia nesciunt nisi nostrum quae quod recusandae, repellat reprehenderit sequi tempore tenetur velit, veritatis. Assumenda beatae dignissimos, dolorum, explicabo ipsa ipsam labore, nulla praesentium quasi recusandae saepe vel. Blanditiis error, veritatis. Ab at cum eos, error facere inventore labore nihil, omnis quae quod recusandae unde voluptas. Accusamus, ad adipisci aliquid hic id, illum ipsa natus nisi obcaecati perspiciatis porro provident quasi quia sit voluptas. Accusamus accusantium animi architecto aspernatur aut blanditiis dolorem eius eum explicabo fuga libero magnam natus possimus quaerat quam quasi qui quia quidem reiciendis repudiandae saepe sapiente tempora totam unde velit, veniam voluptate voluptates? Blanditiis consectetur est facere inventore perspiciatis! Asperiores aspernatur consequuntur cum, deserunt dolore enim iusto laudantium, non praesentium quasi sed sunt voluptas voluptatum. Amet assumenda consequatur consequuntur distinctio dolor ducimus ea error et ex exercitationem expedita facere, facilis fuga laboriosam laborum magnam modi, molestiae nulla officiis optio quidem quisquam repellat sed sint vel vero voluptatem voluptates. Cum, dolor fugiat iste laborum libero quasi sequi sint velit veniam voluptas! Alias corporis cum dicta facere neque, nesciunt optio perspiciatis tempora vitae voluptatum. Id, itaque!'
      },
      {
        name: 'Ουμπουντ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aspernatur atque corporis dicta dignissimos doloribus eligendi et fuga ipsa itaque magni modi mollitia nesciunt nisi nostrum quae quod recusandae, repellat reprehenderit sequi tempore tenetur velit, veritatis. Assumenda beatae dignissimos, dolorum, explicabo ipsa ipsam labore, nulla praesentium quasi recusandae saepe vel. Blanditiis error, veritatis. Ab at cum eos, error facere inventore labore nihil, omnis quae quod recusandae unde voluptas. Accusamus, ad adipisci aliquid hic id, illum ipsa natus nisi obcaecati perspiciatis porro provident quasi quia sit voluptas. Accusamus accusantium animi architecto aspernatur aut blanditiis dolorem eius eum explicabo fuga libero magnam natus possimus quaerat quam quasi qui quia quidem reiciendis repudiandae saepe sapiente tempora totam unde velit, veniam voluptate voluptates? Blanditiis consectetur est facere inventore perspiciatis! Asperiores aspernatur consequuntur cum, deserunt dolore enim iusto laudantium, non praesentium quasi sed sunt voluptas voluptatum. Amet assumenda consequatur consequuntur distinctio dolor ducimus ea error et ex exercitationem expedita facere, facilis fuga laboriosam laborum magnam modi, molestiae nulla officiis optio quidem quisquam repellat sed sint vel vero voluptatem voluptates. Cum, dolor fugiat iste laborum libero quasi sequi sint velit veniam voluptas! Alias corporis cum dicta facere neque, nesciunt optio perspiciatis tempora vitae voluptatum. Id, itaque!'
      },
      {
        name: 'Τζακαρτα',
        text: 'Λορεμ dolor sit amet, consectetur adipisicing elit. Ab, aspernatur atque corporis dicta dignissimos doloribus eligendi et fuga ipsa itaque magni modi mollitia nesciunt nisi nostrum quae quod recusandae, repellat reprehenderit sequi tempore tenetur velit, veritatis. Assumenda beatae dignissimos, dolorum, explicabo ipsa ipsam labore, nulla praesentium quasi recusandae saepe vel. Blanditiis error, veritatis. Ab at cum eos, error facere inventore labore nihil, omnis quae quod recusandae unde voluptas. Accusamus, ad adipisci aliquid hic id, illum ipsa natus nisi obcaecati perspiciatis porro provident quasi quia sit voluptas. Accusamus accusantium animi architecto aspernatur aut blanditiis dolorem eius eum explicabo fuga libero magnam natus possimus quaerat quam quasi qui quia quidem reiciendis repudiandae saepe sapiente tempora totam unde velit, veniam voluptate voluptates? Blanditiis consectetur est facere inventore perspiciatis! Asperiores aspernatur consequuntur cum, deserunt dolore enim iusto laudantium, non praesentium quasi sed sunt voluptas voluptatum. Amet assumenda consequatur consequuntur distinctio dolor ducimus ea error et ex exercitationem expedita facere, facilis fuga laboriosam laborum magnam modi, molestiae nulla officiis optio quidem quisquam repellat sed sint vel vero voluptatem voluptates. Cum, dolor fugiat iste laborum libero quasi sequi sint velit veniam voluptas! Alias corporis cum dicta facere neque, nesciunt optio perspiciatis tempora vitae voluptatum. Id, itaque!'
      }
    ]

    const content =
      <div className='text-white col-lg-8 offset-lg-2'>
        <div className="col-6">
          <h3 className='display-5'>Πολεις που θα επισκευθουμε</h3>
          <div className='display-6 flex-wrap d-flex'>
            Μπαλι
          </div>
          <article className='text-light'>
            <ShowMore
              lines={7}
              more='Διαβάστε περισσότερα'
              less='Απόκρυψη'
              anchorClass='app-show-more'
            >
              {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aspernatur atque corporis dicta dignissimos doloribus eligendi et fuga ipsa itaque magni modi mollitia nesciunt nisi nostrum quae quod recusandae, repellat reprehenderit sequi tempore tenetur velit, veritatis. Assumenda beatae dignissimos, dolorum, explicabo ipsa ipsam labore, nulla praesentium quasi recusandae saepe vel. Blanditiis error, veritatis. Ab at cum eos, error facere inventore labore nihil, omnis quae quod recusandae unde voluptas. Accusamus, ad adipisci aliquid hic id, illum ipsa natus nisi obcaecati perspiciatis porro provident quasi quia sit voluptas. Accusamus accusantium animi architecto aspernatur aut blanditiis dolorem eius eum explicabo fuga libero magnam natus possimus quaerat quam quasi qui quia quidem reiciendis repudiandae saepe sapiente tempora totam unde velit, veniam voluptate voluptates? Blanditiis consectetur est facere inventore perspiciatis! Asperiores aspernatur consequuntur cum, deserunt dolore enim iusto laudantium, non praesentium quasi sed sunt voluptas voluptatum. Amet assumenda consequatur consequuntur distinctio dolor ducimus ea error et ex exercitationem expedita facere, facilis fuga laboriosam laborum magnam modi, molestiae nulla officiis optio quidem quisquam repellat sed sint vel vero voluptatem voluptates. Cum, dolor fugiat iste laborum libero quasi sequi sint velit veniam voluptas! Alias corporis cum dicta facere neque, nesciunt optio perspiciatis tempora vitae voluptatum. Id, itaque!'}
            </ShowMore>
          </article>
        </div>
      </div>


    return (
      <section>
        <BgImage children={content} className={'tour-cities-img img-filter p-5'} fileName={'bali-underwater.jpg'} />
      </section>
    )
  }
}

export default TourCities