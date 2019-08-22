import React, { Component } from "react"
import DayPicker from 'react-day-picker/DayPicker';
import 'react-day-picker/lib/style.css';
import '../../styles/datepicker.scss'

class Datepicker extends Component {

  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [
        new Date(2019, 7, 23),
        new Date(2019, 7, 10),
        new Date(2019, 7, 22),
        new Date(2019, 7, 24),
      ]
    }
  }

  handleDayClick(d) {
    this.state.selectedDays.map(day=>{
      if(day.toDateString() === d.toDateString()){
        this.setState({ selectedDay: day }, ()=>{
          this.props.displayDateUpdated(day)
        });
      }
    })

  }


  render() {
    return (
        <DayPicker
          className={this.props.className}
          locale={'en/gr'}
          months={['Ιανουαριος', 'Φευρουαριος', 'Μαρτιος', 'Απριλιος', 'Μαιος', 'Ιουνιος', 'Ιουλιος', 'Αυγουστος', 'Σεπτεμβριος', 'Οκτοβριος', 'Νοεμβριος', 'Δεκεμβριος']}
          weekdaysLong={['Δευτερα', 'Τριτη', 'Τεταρτη', 'Πεμπτη', 'Παρασκευη', 'Σαββατο', 'Κυριακη']}
          weekdaysShort={['Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα', 'Κυ']}
          labels={{nextMonth: 'Επομενος μηνας', previousMonth: 'Προηγουμενος μηνας'}}
          modifiersStyles={this.modifiersStyles}
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDays}
        />
    );
  }
}

export default Datepicker