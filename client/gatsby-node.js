const axios = require('axios');
const path = require(`path`)



exports.createPages = async ({ actions: { createPage } }) => {
  let url
  url = process.env.PRODUCTION === 'TRUE' ? 'http://139.59.139.233:9000/cities/' : 'http://127.0.0.1:9000/cities/'

  const cities = await axios.get(url)
  cities.data.map(city=>{
    createPage({
      path: `city/${city.url}`,
      component: path.resolve(`./src/components/city/city.js`),
      context: {
        ...city
      }
    })
  })

  createPage({
    path: `tours/parisi`,
    component: path.resolve(`./src/components/tours/tour.js`),
  })

}
