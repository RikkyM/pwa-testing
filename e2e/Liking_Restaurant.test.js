// eslint-disable-next-line no-undef
Feature('Liking Restaurants')

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/')
  I.wait(2)
})

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.amOnPage('/#/like')
  I.wait(2)

  I.see('Restaurant not found!', '.restaurant_item__not__found')

  I.saveScreenshot('empty-liked.png')
})

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
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

  I.seeElement('.food a')
  I.saveScreenshot('one-restaurant-liked.png')
})
