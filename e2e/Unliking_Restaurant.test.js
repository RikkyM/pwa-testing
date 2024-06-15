// eslint-disable-next-line no-undef
Feature('Unliking Restaurants')

// eslint-disable-next-line no-undef
Before(async ({ I }) => {
  I.amOnPage('/')
  I.wait(2)

  I.seeElement('.food a')
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.food a').first()
  I.click(firstRestaurant)
  I.wait(1)

  I.seeElement('#likeButton')
  I.click('#likeButton')
  I.wait(1)

  I.amOnPage('/#/like')
  I.wait(2)
  I.seeElement('.itm')
})

// eslint-disable-next-line no-undef
Scenario('cancel liked one restaurant', async ({ I }) => {
  I.amOnPage('/#/like')
  I.wait(2)

  I.seeElement('.food')
  // eslint-disable-next-line no-undef
  const firstRestaurantUnlike = locate('.food a').first()
  I.click(firstRestaurantUnlike)
  I.wait(1)

  I.seeElement('#likeButton')
  I.click('#likeButton')
  I.wait(1)

  I.amOnPage('/#/like')
  I.wait(2)

  await I.waitForElement('.restaurant_item__not__found')
  I.see('Restaurant not found!', '.restaurant_item__not__found')
  I.saveScreenshot('empty-liked-cancel-liked.png')
})
