import React, {Component} from 'react';
import img1 from '../../assets/images/city/grid/1.jpg'
import img2 from '../../assets/images/city/grid/2.jpg'
import img3 from '../../assets/images/city/grid/3.jpg'
import img4 from '../../assets/images/city/grid/4.jpg'
import img5 from '../../assets/images/city/grid/notre-dame-cathedral_63253-110.jpg'
import Gallery from "react-photo-gallery";

class PhotoGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [
                {
                    src: img1,
                    width: 5,
                    height: 7
                },
                {
                    src: img2,
                    width: 4,
                    height: 3
                },
                {
                    src: img3,
                    width: 3,
                    height: 2
                },
                {
                    src: img4,
                    width: 3,
                    height: 2
                },
                {
                    src: img2,
                    width: 4,
                    height: 3
                },
                {
                    src: img3,
                    width: 3,
                    height: 2
                },
                {
                    src: img5,
                    width: 3,
                    height: 1
                },
            ]
        }
    }



    render() {
        return (
            <div className='col-12 bg-jumbotron mt-6'>
                <div className="col-8 offset-2">
                    <Gallery photos={this.state.photos} />
                </div>
            </div>
        );
    }
}

export default PhotoGrid;