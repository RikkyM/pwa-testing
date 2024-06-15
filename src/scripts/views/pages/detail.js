import UrlParser from '../../routes/url-parser'
import FavoriteDB from '../../data/favorite-db'
import { restaurantDetailTemplate } from '../template/template-creator'
import CONFIG from '../../data/config'
import '../add-review'
import LikeButton from '../../utils/likeButton'

class Detail {
  static async render () {
    return `
      <div id="restaurant-detail">
      <div id="likeButtonContainer"></div>
        <h2 class="detail-head">Detail Restoran</h2>
        <div id="loading" class="spinner"></div>
        <div id="mainContent" class="restaurant"></div>
        <form-review></form-review>
      </div>
    `
  }

  static async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const loading = document.querySelector('#loading')

    const restaurantElement = document.querySelector('.restaurant')
    const likeButtonContainer = document.querySelector('#likeButtonContainer')

    try {
      const response = await fetch(`${CONFIG.BASE_URL}detail/${url.id}`)
      const result = await response.json()

      if (result.restaurant) {
        const data = result.restaurant
        const menu = data.menus || {}

        let foods = ''
        let drinks = ''
        let reviews = ''

        if (menu.foods) {
          menu.foods.forEach((item) => {
            foods += `<p>${item.name}</p>`
          })
        } else {
          foods = '<p>No foods available</p>'
        }

        if (menu.drinks) {
          menu.drinks.forEach((item) => {
            drinks += `<p>${item.name}</p>`
          })
        } else {
          drinks = '<p>No drinks available</p>'
        }

        if (data.customerReviews) {
          data.customerReviews.forEach((item) => {
            reviews += `
            <div class="review_card">
              <p>${item.name}</p>
              <p>${item.review}</p>
              <p>${item.date}</p>
            </div>
          `
          })
        } else {
          reviews = '<p>No reviews available</p>'
        }

        console.log(data)

        restaurantElement.innerHTML = restaurantDetailTemplate(
          data,
          foods,
          drinks,
          reviews
        )

        LikeButton.init({
          likeButtonContainer,
          favoriteRestaurant: FavoriteDB,
          restaurant: {
            id: data.id,
            name: data.name,
            description: data.description,
            city: data.city,
            pictureId: data.pictureId,
            rating: data.rating
          }
        })
      } else {
        restaurantElement.innerHTML =
          '<p class="restaurant_item__not__found">Restaurant not found!</p>'
      }
    } catch (error) {
      restaurantElement.innerHTML = `<p>Error fetching restaurant details: ${error.message}</p>`
    } finally {
      loading.style.display = 'none'
    }
  }
}

export default Detail
