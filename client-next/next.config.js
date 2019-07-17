const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass')



module.exports = withPlugins([
    [withSass],
    [optimizedImages, {
        optimizedImages: true,
        optimizeImagesInDev: true
                /* config for next-optimized-images */
    }],

    // your other plugins here

]);



