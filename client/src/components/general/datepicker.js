import React, { Component } from "react"
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../../styles/datepicker.scss'


class Datepicker extends Component {

  render() {
    return (
      <div className='my-5 box shadow border-top-primary p-4'>
        <div className="col-12">
          <h3 className='display-7-2 text-normal m-0 mb-2'>Αναχωρησεις <span className="text-small text-secondary">(14)</span></h3>
        </div>

        <DayPicker
          locale={'en/gr'}
          months={['Ιανουαριος', 'Φευρουαριος', 'Μαρτιος', 'Απριλιος', 'Μαιος', 'Ιουνιος', 'Ιουλιος', 'Αυγουστος', 'Σεπτεμβριος', 'Οκτοβριος', 'Νοεμβριος', 'Δεκεμβριος']}
          weekdaysLong={['Δευτερα', 'Τριτη', 'Τεταρτη', 'Πεμπτη', 'Παρασκευη', 'Σαββατο', 'Κυριακη']}
          weekdaysShort={['Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα', 'Κυ']}
          labels={{nextMonth: 'Επομενος μηνας', previousMonth: 'Προηγουμενος μηνας'}}
          modifiersStyles={this.modifiersStyles}
          selectedDays={[
            new Date(2019, 7, 23),
            new Date(2019, 7, 10),
            new Date(2019, 7, 22),
            new Date(2019, 7, 24),
          ]}
        />
      </div>
    );
  }
}

export default Datepicker