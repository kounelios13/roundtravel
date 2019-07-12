import React, {Component} from 'react';
import ShowMore from "react-show-more";

class CityDescription extends Component {
    componentDidMount() {
        document.getElementsByClassName('city-wide-bg')[0].style.background = 'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.7)), url(' + this.props.imageUrl +')'
    }

    render() {
        return (
            <div>
                <div className={'bg-jumbotron p-5 city-wide-bg my-6'}>
                    <div className='col-8 offset-2 text-white no-blur'>
                        <h2 className="display-5 mb-4">
                            {this.props.title}
                        </h2>

                        <ShowMore
                            lines={4}
                            more='Διαβαστε περισσοτερα'
                            less='Αποκρυψη'
                            anchorClass='app-show-more'
                        >
                            {this.props.text}
                        </ShowMore>
                    </div>
                </div>
            </div>
        );
    }
}

export default CityDescription;