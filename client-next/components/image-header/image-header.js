import React from 'react';
import '../../styles/image-header.scss'

const ImageHeader = () => {
    const multipleSizes = require(`../../static/images/2.jpg?resize&sizes[]=300&sizes[]=480&sizes[]=720&sizes[]=890&sizes[]=1200&sizes[]=1620&sizes[]=1920`);
    const multipleSizes2 = require(`../../static/images/3.jpg?resize&sizes[]=300&sizes[]=480&sizes[]=720&sizes[]=890&sizes[]=1200&sizes[]=1620&sizes[]=1920`);
    const multipleSizes3 = require(`../../static/images/4.jpg?resize&sizes[]=300&sizes[]=480&sizes[]=720&sizes[]=890&sizes[]=1200&sizes[]=1620&sizes[]=1920`);
    const multipleSizes4 = require(`../../static/images/5.jpg?resize&sizes[]=300&sizes[]=480&sizes[]=720&sizes[]=890&sizes[]=1200&sizes[]=1620&sizes[]=1920`);
    const multipleSizes5 = require(`../../static/images/6.jpg?resize&sizes[]=300&sizes[]=480&sizes[]=720&sizes[]=890&sizes[]=1200&sizes[]=1620&sizes[]=1920`);
    const multipleSizes6 = require(`../../static/images/7.jpg?resize&sizes[]=300&sizes[]=480&sizes[]=720&sizes[]=890&sizes[]=1200&sizes[]=1620&sizes[]=1920`);
    const multipleSizes7 = require(`../../static/images/8.jpg?resize&sizes[]=300&sizes[]=480&sizes[]=720&sizes[]=890&sizes[]=1200&sizes[]=1620&sizes[]=1920`);
    const multipleSizes8 = require(`../../static/images/9.jpg?resize&sizes[]=300&sizes[]=480&sizes[]=720&sizes[]=890&sizes[]=1200&sizes[]=1620&sizes[]=1920`);
    const multipleSizes9 = require(`../../static/images/1.jpg?resize&sizes[]=300&sizes[]=480&sizes[]=720&sizes[]=890&sizes[]=1200&sizes[]=1620&sizes[]=1920`);

    return (
        <div className="row p-0 m-0">
            <div className='col-12 m-0 p-0'>
                <img className='col-12 p-0 m-0 header-image' srcSet={multipleSizes.srcSet} src={multipleSizes.src} />
                <img className='col-12 p-0 m-0 header-image' srcSet={multipleSizes2.srcSet} src={multipleSizes2.src} />
                <img className='col-12 p-0 m-0 header-image' srcSet={multipleSizes3.srcSet} src={multipleSizes3.src} />
                <img className='col-12 p-0 m-0 header-image' srcSet={multipleSizes4.srcSet} src={multipleSizes4.src} />
                <img className='col-12 p-0 m-0 header-image' srcSet={multipleSizes5.srcSet} src={multipleSizes5.src} />
                <img className='col-12 p-0 m-0 header-image' srcSet={multipleSizes6.srcSet} src={multipleSizes6.src} />
                <img className='col-12 p-0 m-0 header-image' srcSet={multipleSizes7.srcSet} src={multipleSizes7.src} />
                <img className='col-12 p-0 m-0 header-image' srcSet={multipleSizes8.srcSet} src={multipleSizes8.src} />
                <img className='col-12 p-0 m-0 header-image' srcSet={multipleSizes9.srcSet} src={multipleSizes9.src} />
            </div>
        </div>
    );
};

export default ImageHeader;