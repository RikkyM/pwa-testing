import {
 beforeEach, describe, expect, it 
} from '@jest/globals'
import FavoriteDB from '../src/scripts/data/favorite-db'
import LikeButton from '../src/scripts/utils/likeButton'

const likeButtonRestaurant = async (restaurant) => {
  await LikeButton.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteDB,
    restaurant
  })
}

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteDB.putRestaurant({ id: 1 })
  })

  // eslint-disable-next-line no-undef
  afterEach(async () => {
    await FavoriteDB.deleteRestaurant(1)
  })

  it('should display unlike widget when the restaurant has been liked', async () => {
    await likeButtonRestaurant({ id: 1 })

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeTruthy()
  })

  it('should not display like widget when the restaurant has been liked', async () => {
    await likeButtonRestaurant({ id: 1 })

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy()
  })

  it('should be able to remove liked restaurant from the list', async () => {
    await likeButtonRestaurant({ id: 1 })

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'))
    expect(await FavoriteDB.getAllRestaurants()).toEqual([])
  })

  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await likeButtonRestaurant({ id: 1 })

    await FavoriteDB.deleteRestaurant(1)

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'))
    expect(await FavoriteDB.getAllRestaurants()).toEqual([])
  })
})
