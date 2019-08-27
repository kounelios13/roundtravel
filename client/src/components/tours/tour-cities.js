import React, { Component } from "react"
import Image from "../general/image"
import '../../styles/tours/tour-cities.scss'
import BgImage from "../general/bg-image"
import ShowMore from "react-show-more"
import InfoTabs from "../general/info-tabs"
import iconArrowLeft from '../../images/icon-arrow-left.svg'
import bali from '../../images/bali-waterfall.jpg'
import ubud from '../../images/ubud-forrest.jpg'
import jakarta from '../../images/jakarta-center.jpg'

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




    return (
      <section className='d-flex flex-wrap col-lg-8 offset-lg-2'>
        <div className="col-12 d-flex flex-wrap p-0">
          <div className="col-6 p-0 text-left">
            <img className='tour-cities-img p-0 m-0' src={bali} alt=""/>
          </div>
          <div className="col-6 p-0">
            <h4 className='display-5 m-0 mb-5'>Μπαλι</h4>
            <InfoTabs className='m-0' tabInfo={[{"title":"Γενικα","content":[{"title":"","text":"Το Παρίσι (γαλλικά: Paris, ΔΦΑ [paˈʁi]), γνωστό και ως η Πόλη του φωτός (Ville lumière), από τότε που εφοδιάστηκαν οι κύριες λεωφόροι του με φανούς γκαζιού το 1828, είναι η πρωτεύουσα της Γαλλίας και της περιφέρειας Ιλ ντε Φρανς (Île-de-France) και μία από τις ιστορικότερες πόλεις της Ευρώπης. Το Παρίσι περιλαμβάνει την πόλη του Παρισιού και τα περίχωρα και βρίσκεται σε ένα λεκανοπέδιο.","name":"Γενικα"},{"name":"Πληθησμος","text":"Το Παρίσι είναι κτισμένο στο κέντρο του λεκανοπεδίου του Παρισιού, κατά μέσο όρο 65 μέτρα πάνω από τη στάθμη της θάλασσας. Η πόλη του Παρισιού περιβάλλεται από μεγάλα δάση, τα οποία προσφέρουν ανάσα δροσιάς και ανάπαυσης στους Παριζιάνους. Η έκταση της πόλης φτάνει τα 105,4 τετραγωνικά χιλιόμετρα, ενώ ολόκληρη η μητροπολιτική περιοχή ξεπερνά τα 14.518 τετραγωνικά χιλιόμετρα."}]},{"title":"Φαγητο","content":[{"name":"οαερκοεα","text":"ροεακορεακ"}]},{"title":"Πολιτισμος","content":[{"name":"εοακρο","text":"εραοκροαεκ"}]}]}/>
          </div>
        </div>
        <div className="col-12 d-flex flex-wrap mt-5">
          <div className="col-6 p-0">
            <h4 className='display-5 m-0 mb-5'>Ουμπουντ</h4>
            <InfoTabs className='m-0' tabInfo={[{"title":"Γενικα","content":[{"title":"","text":"Το Παρίσι (γαλλικά: Paris, ΔΦΑ [paˈʁi]), γνωστό και ως η Πόλη του φωτός (Ville lumière), από τότε που εφοδιάστηκαν οι κύριες λεωφόροι του με φανούς γκαζιού το 1828, είναι η πρωτεύουσα της Γαλλίας και της περιφέρειας Ιλ ντε Φρανς (Île-de-France) και μία από τις ιστορικότερες πόλεις της Ευρώπης. Το Παρίσι περιλαμβάνει την πόλη του Παρισιού και τα περίχωρα και βρίσκεται σε ένα λεκανοπέδιο.","name":"Γενικα"},{"name":"Πληθησμος","text":"Το Παρίσι είναι κτισμένο στο κέντρο του λεκανοπεδίου του Παρισιού, κατά μέσο όρο 65 μέτρα πάνω από τη στάθμη της θάλασσας. Η πόλη του Παρισιού περιβάλλεται από μεγάλα δάση, τα οποία προσφέρουν ανάσα δροσιάς και ανάπαυσης στους Παριζιάνους. Η έκταση της πόλης φτάνει τα 105,4 τετραγωνικά χιλιόμετρα, ενώ ολόκληρη η μητροπολιτική περιοχή ξεπερνά τα 14.518 τετραγωνικά χιλιόμετρα."},{"name":"Πληθησμος","text":"Το Παρίσι είναι κτισμένο στο κέντρο του λεκανοπεδίου του Παρισιού, κατά μέσο όρο 65 μέτρα πάνω από τη στάθμη της θάλασσας. Η πόλη του Παρισιού περιβάλλεται από μεγάλα δάση, τα οποία προσφέρουν ανάσα δροσιάς και ανάπαυσης στους Παριζιάνους. Η έκταση της πόλης φτάνει τα 105,4 τετραγωνικά χιλιόμετρα, ενώ ολόκληρη η μητροπολιτική περιοχή ξεπερνά τα 14.518 τετραγωνικά χιλιόμετρα."}]},{"title":"Φαγητο","content":[{"name":"οαερκοεα","text":"ροεακορεακ"}]},{"title":"Πολιτισμος","content":[{"name":"εοακρο","text":"εραοκροαεκ"}]}]}/>
          </div>
          <div className="col-6 px-5 text-left">
            <img className='tour-cities-img p-0 m-0' src={ubud} alt=""/>
          </div>
        </div>
        <div className="col-12 d-flex flex-wrap p-0 mt-5">
          <div className="col-6 p-0 text-left">
            <img className='tour-cities-img p-0 m-0' src={jakarta} alt=""/>
          </div>
          <div className="col-6 p-0">
            <h4 className='display-5 m-0 mb-5'>Τζακαρτα</h4>
            <InfoTabs className='m-0' tabInfo={[{"title":"Γενικα","content":[{"title":"","text":"Το Παρίσι (γαλλικά: Paris, ΔΦΑ [paˈʁi]), γνωστό και ως η Πόλη του φωτός (Ville lumière), από τότε που εφοδιάστηκαν οι κύριες λεωφόροι του με φανούς γκαζιού το 1828, είναι η πρωτεύουσα της Γαλλίας και της περιφέρειας Ιλ ντε Φρανς (Île-de-France) και μία από τις ιστορικότερες πόλεις της Ευρώπης. Το Παρίσι περιλαμβάνει την πόλη του Παρισιού και τα περίχωρα και βρίσκεται σε ένα λεκανοπέδιο.","name":"Γενικα"},{"name":"Πληθησμος","text":"Το Παρίσι είναι κτισμένο στο κέντρο του λεκανοπεδίου του Παρισιού, κατά μέσο όρο 65 μέτρα πάνω από τη στάθμη της θάλασσας. Η πόλη του Παρισιού περιβάλλεται από μεγάλα δάση, τα οποία προσφέρουν ανάσα δροσιάς και ανάπαυσης στους Παριζιάνους. Η έκταση της πόλης φτάνει τα 105,4 τετραγωνικά χιλιόμετρα, ενώ ολόκληρη η μητροπολιτική περιοχή ξεπερνά τα 14.518 τετραγωνικά χιλιόμετρα."}]},{"title":"Φαγητο","content":[{"name":"οαερκοεα","text":"ροεακορεακ"}]},{"title":"Πολιτισμος","content":[{"name":"εοακρο","text":"εραοκροαεκ"}]}]}/>
          </div>
        </div>
      </section>
    )
  }
}

export default TourCities