import React, {Component} from 'react';
import paris from '../../assets/images/city/paris1.jpg'
import alsace from '../../assets/images/city/alsace1-1.jpg'

class TourCitiesVisited extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [
                {
                    name: 'Παρισι',
                    imageUrl: paris,
                    text: 'Το πρόγραμμα-προπύργιο της «άλλης» Ευρώπης του Versus Travel. Ένα υπέροχο ταξίδι, σχεδιασμένο όπως πρέπει να είναι μια ολοκληρωμένη επίσκεψη σε μια περιοχή, με γεμάτες ημέρες, χωρίς προαιρετικές εκδρομές, με διαμονή σε ιστορικές πόλεις και έμφαση στην ιστορία και τον πολιτισμό. '
                },
                {
                    name: 'Αλσατια',
                    imageUrl: alsace,
                    text: 'Το πρόγραμμα-προπύργιο της «άλλης» Ευρώπης του Versus Travel. Ένα υπέροχο ταξίδι, σχεδιασμένο όπως πρέπει να είναι μια ολοκληρωμένη επίσκεψη σε μια περιοχή, με γεμάτες ημέρες, χωρίς προαιρετικές εκδρομές, με διαμονή σε ιστορικές πόλεις και έμφαση στην ιστορία και τον πολιτισμό. '
                }
            ]
        }
    }


    render() {
        return (
            <div className='d-flex flex-wrap'>
                {
                    this.state.cities.map(city=>{
                        return(
                            <div className="col-12 p-0 d-flex tour-cities-visited-wrapper">
                                <div className='col-4 col-lg-2 p-0'>
                                    <img src={city.imageUrl} className='img-fluid' alt=""/>
                                </div>
                                <div className="col-8">
                                    <h4>{city.name}</h4>
                                    <p>
                                        {city.text}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default TourCitiesVisited;