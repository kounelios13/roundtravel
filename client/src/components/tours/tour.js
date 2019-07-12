import React, {Component} from 'react';
import eiffel from '../../assets/images/city/eiffel-tower-951509.jpg'
import TourImageHeader from "../image-headers/tour-image-header";
import GeneralInfo from "./general-info";
import TourIntro from "./tour-intro";
import Flights from "./flights";
import TourPdf from "./tour-pdf";
import CityDescription from "../city/city-description";
import TourInfoTabs from "./tour-info-tabs";

class Tour extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <TourImageHeader title={'Ταξιδι για οικογενεια 4ων'} subtitle={'Μαγικο παρισι'} imageUrl={eiffel}  />
                <div>
                    <div className="d-flex my-6 flex-wrap align-items-start">
                        <div className="col-8 offset-2 col-lg-6">
                            <TourIntro />
                            <TourInfoTabs />
                        </div>

                        <div className='col-8 offset-2 col-lg-2 offset-lg-0 p-0 d-flex flex-wrap'>
                            <GeneralInfo />
                            <TourPdf />
                            <Flights />
                        </div>
                    </div>
                    <CityDescription title={'Ζηστε την εμπειρια της πολης του φωτος'} text={'Πόλη συνδεδεμένη με την κομψότητα, τους μεγάλους οίκους μόδας, τα αρώματα και τα καλλυντικά, τη ρομαντική και ερωτική ατμόσφαιρα, τα διάσημα καμπαρέ, την όπερα και τα μουσεία, τις μπουτίκ κορυφαίων γάλλων σχεδιαστών. Μια πόλη που δεν την χορταίνεις ποτέ, κάθε φορά είναι σαν την … πρώτη φορά.! Ξεκινήστε από τις ιστορικές και γραφικές συνοικίες της "Πόλης του Φωτός". Επισκεφτείτε τη Μονμάρτρη, στέκι του Πικάσο, του Μπρακ, του Λωτρέκ, βάλτε στόχο το Καρτιέ Λατέν, κέντρο της διανόησης και έδρα μερικών από τα πιο φημισμένα γαλλικά πανεπιστήμια και συνεχίστε τον περίπατό σας στο Σαιντ Ζερμαίν, ακόμη μια γραφική συνοικία του Παρισιού. Μην παραλείψετε το χαρακτηριστικότερο μνημείο της πόλης, τον Πύργο του ‘Αιφελ. Με 300 μέτρα ύψος και 7.000 τόνους σίδερο που δεν μπορούν παρά να τραβήξουν το βλέμμα, ακόμη και του πιο αφηρημένου. Την περιήγησή σας στο Παρίσι της τέχνης και των μνημείων θα ολοκληρώσουν οι Βερσαλλίες, η κατοικία των Γάλλων μοναρχών, με τα συντριβάνια, τις λίμνες του Απόλλωνα και του Ποσειδώνα και την αίθουσα των καθρεπτών, τον Πύργο του Chantilly που φιλοξενεί στις αίθουσές του πίνακες του Ραφαήλ, του Ντα Βίντσι και του Ντελακρουά και φυσικά, το Μουσείο του Λούβρου, το μεγαλύτερο του κόσμου, που εκθέτει 35.000 έργα τέχνης - μόλις δηλαδή το 8% των αποκτημάτων του, που υπολογίζονται στα 445.000 κομμάτια!'} imageUrl={'https://i.imgur.com/GRyX79Y.jpg'} />
                </div>
            </div>
        );
    }
}

export default Tour;