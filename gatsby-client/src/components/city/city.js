import React from "react"
import CityImage from "./city-image"
import ImageHeader from "../image-header/image-header"
import Layout from "../layout"
import TourGroup from "../tours/tour-group"
import CityInfo from "./city-info"
import PointsOfInterest from "../general/points-of-interest"
import TourOfferWide from "../tours/tour-offer-wide"
import CityInfoTabs from "./city-info-tabs"


const City = (props) => {

  const pointsOfInterest = [
    {
      photo: 'versallies.jpg',
      name: 'Βερσαλλιες',
      description: 'To Εθνικό Μουσείο της Γαλλίας, στην περιοχή των Βερσαλλιών, περίπου 35 λεπτά από το κέντρο του Παρισιού, ξεκίνησε να χτίζεται μετά από εντολή του Λουδοβίκου ΧΙV, για να εναποθέσει τα λάφυρα που είχε αποσπάσει από έναν υπουργό του. Μετά από χρόνιες ανακαινίσεις και αλλαγές στη δομή του, στα τέλη του 18ου αιώνα προσέλαβε τη σημερινή του μορφή. Οι εργασίες για την ύψους 50 μ. αψίδα ξεκίνησαν το 1806, προς τιμή της ναπολεόντειας νίκης στο Αούστερλιτς, αλλά ολοκληρώθηκαν το 1836 εξαιτίας της πτώσης του αυτοκράτορα. Τέσσερα χρόνια αργότερα, η πομπή της κηδείας του Ναπολέοντα πέρασε κάτω από αυτή. Η Αψίδα του Θριάμβου είναι στο κέντρο της νοητής ευθείας που σχηματίζουν τρεις αψίδες, ανάμεσά τους η Αψίδα του Θριάμβου του Καρουσέλ (μπροστά στο Λούβρο) και η Αψίδα της Defense.',
    },
    {
      photo: 'louvre2.jpg',
      name: 'Μουσειο του Λουβρου',
      description: 'Δώδεκα Λεωφόροι συναντώνται στην Αψίδα συναντώνται στην Αψίδα συναντώνται στην Αψίδα συναντώνται στην Αψίδα του Θριάμβου, σχηματίζοντας ένα αστέρι και προσφέροντας ένα θέαμα εντυπωσιακό! Το επιβλητικό μνημείο κοσμεί την Place Charlesde Gaulle, στο 8ο Διαμέρισμα, στα ξακουστά Ηλύσια Πεδία (Champs Elysees). Οι εργασίες για την ύψους 50 μ. αψίδα ξεκίνησαν το 1806, προς τιμή της ναπολεόντειας νίκης στο Αούστερλιτς, αλλά ολοκληρώθηκαν το 1836 εξαιτίας της πτώσης του αυτοκράτορα. Τέσσερα χρόνια αργότερα, η πομπή της κηδείας του Ναπολέοντα πέρασε κάτω από αυτή. Η Αψίδα του Θριάμβου είναι στο κέντρο της νοητής ευθείας που σχηματίζουν τρεις αψίδες, ανάμεσά τους η Αψίδα του Θριάμβου του Καρουσέλ (μπροστά στο Λούβρο) και η Αψίδα της Defense. H θέα από ψηλά είναι ανεπανάληπτη, καθώς μπορείτε να δείτε το σχήμα αστεριού που σχηματίζουν οι 12 λεωφόροι που καταλήγουν σε αυτή. Στην αψίδα βρίσκεται, επίσης, και το Μνημείο του Άγνωστου Στρατιώτη, ο βωμός του οποίου φέρει φλόγα που άναψε για πρώτη φορά το 1921 στη μνήμη των πεσόντων του Α’ Παγκοσμίου Πολέμου.'
    },
    {
      photo: 'notr.jpg',
      name: 'Παναγια των παρισιων',
      description: 'Ο καθεδρικός ναός στο κέντρο του Παρισιού, στην περιοχή Saint Michel, στο 4o Διαμέρισμα, είναι ένα από τα πιο πολυφωτογραφιμένα μνημεία της πόλης. Η κατασκευή του άρχισε το 1160 και ολοκληρώθηκε στα μέσα του 13ου αιώνα. Το 1699 υπέστη ακρωτηριάσεις, με πρόφαση την επισκευή του. Την προσοχή σας θα τραβήξουν τα γλυπτά, τα δύο κωδωνοστάσια ύψους 68 μ. και ο εσωτερικός διάκοσμος με τα βιτρό. Στις 2 Δεκεμβρίου 1804 εδώ αναγορεύτηκε Αυτοκράτορας ο Ναπολέων, ενώ το κτίσμα αποτέλεσε πηγή έμπνευσης για τον Βίκτωρα Ουγκώ στο μυθιστόρημα «Η Παναγία των Παρισίων».'
    },
    {
      photo: 'opera.jpg',
      name: 'Εθνικη Οπερα',
      description: 'Η πιο διάσημη Όπερα του κόσμου, αυτή του Παρισιού, βρίσκεται στο 9ο Διαμέρισμα, μπροστά ακριβώς από τις περίφημες Galleries Lafayette. Εμπνευστής αυτού του αρχιτεκτονικού αριστουργήματος είναι ο Charles Garnier, ενώ οι κατασκευή της διήρκησε από το 1861 έως το 1875. Με χωρητικότητα 2.700 θεατών, έχει φιλοξενήσει μερικά από τα πιο σημαντικά έργα παγκοσμίως. Οι συλλογές του επονομαζόμενου «μουσείου-βιβλιοθήκης», μέσα στην Όπερα, που κατασκευάστηκε από τον Ναπολέοντα ΙΙΙ, παρουσιάζουν την ιστορία της τους τελευταίους 3 αιώνες. Καθ’ όλη τη διάρκεια του έτους φιλοξενούνται εποχικές εκθέσεις. Στη μόνιμη συλλογή θα βρείτε κοσμήματα, γλυπτά, βιβλία Ιστορίας, πίνακες ζωγραφικής, φωτογραφίες, σφραγίδες, διακοσμητικά αντικείμενα, λογοτεχνικά έργα, υφάσματα, κοστούμια εποχής, σκίτσα και μουσικά δείγματα.'
    },
    {
      photo: 'eiffel.jpg',
      name: 'Πυργος του Αιφελ',
      description: 'Στην κορυφή του Montagne Ste Geneviève, στο 5ο Διαμέρισμα, κοντά στο Πανεπιστήμιο της Σορβόννης και τον Κήπο του Λουξεμβούργου (Jardin du Luxembourg), βρίσκεται το Πάνθεον. Χτίστηκε το 1755 πάνω στα θεμέλια της εκκλησίας Sainte Geneviève από τον αρχιτέκτονα Jacques-Germain Soufflot και χρειάστηκαν 34 χρόνια έως την αποπεράτωσή του. Το 1806 το οικοδόμημα μετατράπηκε και πάλι σε εκκλησία, αλλά από το 1885 λειτουργεί ως χώρος όπου φιλοξενούνται οι τάφοι επιφανών ιστορικών προσωπικοτήτων, όπως του Βίκτωρα Ουγκώ, του Βολταίρου, του Jean Monnet, της Μαρίας και του Πιερ Κιουρί, του Εμίλ Ζολά κ.ά. Εδώ, το 1851 ο αστρονόμος Ζαν Μπερνάρ Λεόν Φουκώ πραγματοποίησε το πρώτο περίφημο πείραμά του, που αποδεικνύει ότι η Γη περιστρέφεται γύρω από τον άξονά της, και μέχρι σήμερα φυλάσσεται εδώ το περίφημο «Εκκρεμές».'
    }
  ]


  return (
    <Layout>
      <ImageHeader title={'Ταξιδι στο παρισι'} subtitle={'Φτηνα εισητηρια και εκδρομες'} fileName={'1.jpg'} />
      <TourGroup />
      <CityInfo />
      <PointsOfInterest points={pointsOfInterest} />
      <TourOfferWide />
      <CityInfoTabs />
    </Layout>
  )
}

export default City