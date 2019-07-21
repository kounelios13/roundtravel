import React from 'react';
import '../../styles/image-header.scss'

const ImageHeader = () => {
    const multipleSizes = require(`../../static/images/2.jpg?resize&sizes[]=300&sizes[]=480&sizes[]=720&sizes[]=890&sizes[]=1200&sizes[]=1620&sizes[]=1920`);

    return (
        <div className="row p-0 m-0">
            <div className='col-12 m-0 p-0'>
                <img className='col-12 p-0 m-0 header-image' srcSet={multipleSizes.srcSet} src={multipleSizes.src} />
            </div>
        </div>
    );
};

export default ImageHeader;