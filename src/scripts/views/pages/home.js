/* eslint-env serviceworker */
import { restaurantItemTemplate } from '../template/template-creator'

class Home {
  static async render () {
    return `
      <div id="hero">
        <figure class="hero-image">
          <picture>
            <source media="(max-width: 480px)" srcset="./images/heros/hero-image_4-small.jpg">
            <img loading="lazy" crossorigin="anonymous" src="./images/heros/hero-image_4-large.jpg" alt="hero-image" />
          </picture>
          <figcaption>
            <span>Selamat Datang di AfterTaste</span>
            <span>Kami hadir untuk memenuhi segala selera Anda</span>
          </figcaption>
        </figure>
      </div>
      <div id="mainContent" class="item">
        <h3>Restoran</h3>
        <section class="food"></section>
      </div>
    `
  }

  // static async cacheData (restaurants) {
  //   const cache = await caches.open('restaurant-api')
  //   restaurants.forEach((res) => {
  //     const req = new Request(`${url}/detail/${res.id}`)
  //     cache.put(req, new Response(JSON.stringify({ restaurant: res })))
  //   })
  // }

  // static async getCacheData () {
  //   const cache = await caches.open('restaurant-api')
  //   const keys = await cache.keys()
  //   const promises = keys.map(async (key) => {
  //     const res = await cache.match(key)
  //     const data = await res.json()
  //     return data.restaurant
  //   })
  //   return Promise.all(promises)
  // }

  static async afterRender () {
    const response = await fetch('https://restaurant-api.dicoding.dev/list')
    const data = await response.json()
    const itm = document.querySelector('.food')

    const restaurants = data.restaurants
    restaurants.forEach((item) => {
      itm.innerHTML += restaurantItemTemplate(item)
    })

    // if (Array.isArray(data.restaurants)) {
    // } else {
    //   console.error("Data restaurants is not an array:", data.restaurants);
    // }
  }
}

export default Home
