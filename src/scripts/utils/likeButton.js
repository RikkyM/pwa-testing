import {
  likeButtonTemplate,
  unlikeButtonTemplate
} from '../views/template/template-creator'

const LikeButton = {
  async init ({ likeButtonContainer, favoriteRestaurant, restaurant }) {
    this._likeButtonContainer = likeButtonContainer
    this._favoriteRestaurant = favoriteRestaurant
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant
    if (await this._cekRestaurant(id)) {
      this._renderUnlike()
    } else {
      this._renderLike()
    }
  },

  async _cekRestaurant (id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id)
    return !!restaurant
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = likeButtonTemplate()
    const like = document.querySelector('#likeButton')
    like.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant)
      await this._renderButton()
    })
  },

  _renderUnlike () {
    const { id } = this._restaurant
    this._likeButtonContainer.innerHTML = unlikeButtonTemplate()
    const unlike = document.querySelector('#likeButton')
    unlike.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(id)
      await this._renderButton()
    })
  }
}

export default LikeButton
