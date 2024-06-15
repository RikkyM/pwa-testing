// eslint-disable-next-line no-undef
Feature('Review Restaurants')

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/')
  I.wait(2)
})

// eslint-disable-next-line no-undef
Scenario('input review restaurant', async ({ I }) => {
  I.seeElement('.food a')
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.food a').first()
  I.click(firstRestaurant)
  I.wait(1)

  I.seeElement('.nameInput input')
  I.fillField('.nameInput input', 'Rikky Mahendra')
  I.wait(1)

  I.seeElement('.reviewInput textarea')
  I.fillField('.reviewInput textarea', 'Hello My Name is Rikky Mahendra and im a Web Developer')
  I.wait(1)

  I.seeElement('.submitButton button')
  I.click('.submitButton button')
  I.wait(2)

  I.saveScreenshot('restaurant-review.png')
})
