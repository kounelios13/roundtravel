const axios = require('axios');
const path = require(`path`)

exports.createPages = async ({ actions: { createPage } }) => {
  const cities = await axios.get('http://139.59.139.233:9000/cities/')
  console.log(cities)
  cities.data.map(city=>{
    console.log(city)
    createPage({
      path: `city/${city.url}`,
      component: path.resolve(`./src/components/city/city.js`),
      context: {
        ...city
      }
    })
  })
}
