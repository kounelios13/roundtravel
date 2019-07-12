import React, {Component} from 'react';
import ImageHeader from "../image-headers/image-header";
import TourGroup from "../tours/tour-group";
import CityDescription from "./city-description";
import PointsOfInterest from "../utils/points-of-interest";
import PhotoGrid from "../utils/photo-grid";
import CityInfo from "./city-info";

class City extends Component {
    render() {
        return (
            <div>
                <ImageHeader title={'Εκδρομη στο Παρισι'} subtitle={'Εκδρομες και εισητηρια για την πολη του φωτος'} imageUrl={'http://www.ihrm2020.org/sites/all/themes/ihrm_theme/images/slide-image-2.jpg'} />
                <TourGroup />
                <CityDescription title={'Ζηστε την εμπειρια της πολης του φωτος'} text={'Πόλη συνδεδεμένη με την κομψότητα, τους μεγάλους οίκους μόδας, τα αρώματα και τα καλλυντικά, τη ρομαντική και ερωτική ατμόσφαιρα, τα διάσημα καμπαρέ, την όπερα και τα μουσεία, τις μπουτίκ κορυφαίων γάλλων σχεδιαστών. Μια πόλη που δεν την χορταίνεις ποτέ, κάθε φορά είναι σαν την … πρώτη φορά.! Ξεκινήστε από τις ιστορικές και γραφικές συνοικίες της "Πόλης του Φωτός". Επισκεφτείτε τη Μονμάρτρη, στέκι του Πικάσο, του Μπρακ, του Λωτρέκ, βάλτε στόχο το Καρτιέ Λατέν, κέντρο της διανόησης και έδρα μερικών από τα πιο φημισμένα γαλλικά πανεπιστήμια και συνεχίστε τον περίπατό σας στο Σαιντ Ζερμαίν, ακόμη μια γραφική συνοικία του Παρισιού. Μην παραλείψετε το χαρακτηριστικότερο μνημείο της πόλης, τον Πύργο του ‘Αιφελ. Με 300 μέτρα ύψος και 7.000 τόνους σίδερο που δεν μπορούν παρά να τραβήξουν το βλέμμα, ακόμη και του πιο αφηρημένου. Την περιήγησή σας στο Παρίσι της τέχνης και των μνημείων θα ολοκληρώσουν οι Βερσαλλίες, η κατοικία των Γάλλων μοναρχών, με τα συντριβάνια, τις λίμνες του Απόλλωνα και του Ποσειδώνα και την αίθουσα των καθρεπτών, τον Πύργο του Chantilly που φιλοξενεί στις αίθουσές του πίνακες του Ραφαήλ, του Ντα Βίντσι και του Ντελακρουά και φυσικά, το Μουσείο του Λούβρου, το μεγαλύτερο του κόσμου, που εκθέτει 35.000 έργα τέχνης - μόλις δηλαδή το 8% των αποκτημάτων του, που υπολογίζονται στα 445.000 κομμάτια!'} imageUrl={'https://i.imgur.com/nqDtZz4.jpg'} />
                <PointsOfInterest />
                <PhotoGrid />
                <CityInfo additionalClasses={'col-8 offset-2'} />




                <div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>

        );
    }
}

export default City;