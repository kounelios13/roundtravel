import React, {Component} from 'react';


class ImageHeader extends Component {
    componentDidMount() {
        document.getElementsByClassName('image-header-image')[0].style.background = 'url(' + this.props.imageUrl + ')'
    }

    render() {
        return (
            <div className="row p-0 m-0">
                <div className='image-header-container col-12 p-0 m-0'>
                    <div className='image-header-image' ref={this.imageDiv}>
                            <div className="image-header-text">
                                <h1 className='display-4'>{this.props.title}</h1>
                                <h2>{this.props.subtitle}</h2>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageHeader;