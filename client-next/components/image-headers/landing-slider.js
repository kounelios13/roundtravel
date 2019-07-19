import React, {Component} from 'react';

class LandingSlider extends Component {
    constructor(props) {
        super(props);
        this.multipleSizes = require('../../static/images/1.jpg?resize&sizes[]=375&sizes[]=568&sizes[]=768&sizes[]=1024&sizes[]=1366&sizes[]=1680&sizes[]=1920');
    }


    render() {
        return (
            <div>
                <img className='img-fluid' srcSet={this.multipleSizes.srcSet} src={this.multipleSizes.src} />
            </div>
        );
    }
}

export default LandingSlider;