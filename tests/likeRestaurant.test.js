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

describe('Like A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('should show the like button when the restaurant has not been liked before', async () => {
    await likeButtonRestaurant({ id: 1 })

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy()
  })

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await likeButtonRestaurant({ id: 1 })

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy()
  })

  it('should be able to like the restaurant', async () => {
    await likeButtonRestaurant({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    const restaurant = await FavoriteDB.getRestaurant(1)
    expect(restaurant).toEqual({ id: 1 })

    await FavoriteDB.deleteRestaurant(1)
  })

  it("should not add a restaurant again when it's already liked", async () => {
    await likeButtonRestaurant({ id: 1 })

    await FavoriteDB.putRestaurant({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteDB.getAllRestaurants()).toEqual([{ id: 1 }])

    await FavoriteDB.deleteRestaurant(1)
  })
})
