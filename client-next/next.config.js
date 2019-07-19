const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass')
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = withPlugins([
    [withSass],
    [optimizedImages, {
        optimizedImages: true,
        optimizeImagesInDev: true
    }],
    // your other plugins here

]);
