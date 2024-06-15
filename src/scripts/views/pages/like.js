import FavoriteDB from '../../data/favorite-db'

class Like {
  static async render () {
    return `
        <h1 class="head_favorite">Restaurant Favorite</h1>
        <div class="food" id="mainContent"></div>
    `
  }

  static async afterRender () {
    const favoriteRestaurants = (restaurants) => {
      const item = document.querySelector('.food')
      if (restaurants.length === 0) {
        item.innerHTML = '<p class="restaurant_item__not__found">Restaurant not found!</p>'
      } else {
        restaurants.forEach((data) => {
          item.innerHTML += `
            <a href="#/detail/${data.id}" class="itm" data-id="${data.id}" tabindex="6">
              <img loading="lazy" src="https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}" alt=" " />
              <figcaption>
                <span>${data.name}</span>
                <span>${data.city}</span>
                <span><span class="star">&#9733;</span> ${data.rating}</span>
              </figcaption>
            </a>
          `
        })
      }
    }

    const test = await FavoriteDB.getAllRestaurants()

    favoriteRestaurants(test)
  }
}

export default Like
