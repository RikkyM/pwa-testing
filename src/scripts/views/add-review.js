import UrlParser from "../routes/url-parser"

class review extends window.HTMLElement {
  constructor () {
    super()
    this._url = 'https://restaurant-api.dicoding.dev'
    this.render()
  }

  inputForm () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const form = document.querySelector('#formInput')
    const name = document.querySelector('#nama')
    const review = document.querySelector('#review')

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const id = url.id

      const formData = {
        id,
        name: name.value.trim(),
        review: review.value.trim()
      }

      fetch(`${this._url}/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then((response) => response.json())
        .then((response) => {
          if (name.value !== '' && review.value !== '') {
            console.log(response.message)
            console.log('Review berhasil ditambahkan')
            window.location.reload()
          }
        })
        .catch((error) => console.error(error))
    })
  }

  render () {
    this.innerHTML = `
      <form id="formInput">
        <div class="form-body">
          <div class="nameInput">
            <label for="nama">Nama</label>
            <input type="text" id="nama" />
          </div>
          <div class="reviewInput">
            <label for="review">Review</label>
            <textarea id="review" style="resize: none;"></textarea>
          </div>
          <div class="submitButton">
            <button id="submit" type="submit">Submit</button>
          </div>
        </div>
      </form>
    `

    this.inputForm()
  }
}

window.customElements.define('form-review', review)
