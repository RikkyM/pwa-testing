import CONFIG from '../../data/config'

const restaurantItemTemplate = (restaurant) => `
  <a href="#/detail/${restaurant.id}" class="itm" data-id="${restaurant.id}" tabindex="6">
            <img loading="lazy" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" />
            <figcaption>
              <span>${restaurant.name}</span>
              <span>${restaurant.city}</span>
              <span><span class="star">&#9733;</span> ${restaurant.rating}</span>
            </figcaption>
          </a>
`

const restaurantDetailTemplate = (data, foods, drinks, reviews) => `
  <style>
  #mainContent {
    width: 100%;
    display: flex;
    align-items:center;
    flex-direction: column;
  }
    h3 {
        text-align: center;
        font-size: 25px;
        padding: 10px 0;
    }
    img {
        max-width: 80%;
        justify-self: center;
    }
    .menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 70px;
        margin: 20px 0 0;
    }
    .foods, .drinks {
        display: flex;
        flex-direction: column;
        font-size: 20px;
        align-items: center;
    }
    .alamat {
      margin: 10px 0 0;
    }
    .alamat, .kota, .deskripsi {
      font-size: 20px;
      text-align: center;
    }
    .review {
      text-align: center;
      margin: 20px 0 0;
    }
    .review h2 {
      font-size: 25px;
      margin: 0 0 20px;
    }
    .all_review {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      padding: 0 10px;
      gap: 20px;
      margin: 0 0 10px;
    }
    .review_card {
      border: 1px solid rgba(0,0,0,.3);
      box-shadow: 5px 5px 0 rgba(0,0,0, .3);
      word-wrap: break-word; /* Add this line */
      word-break: break-all;
      padding: 10px;
    }
    @media only screen and (min-width: 768px) {
      .all_review {
       grid-template-columns: repeat(2, 1fr);
      }
      .menu {
        flex-direction: row;
      }
    }
    /* Spinner CSS */
    .spinner {
      border: 16px solid #f3f3f3;
      border-top: 16px solid #3498db;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
      display: block;
      margin: 20px auto;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    /* Button CSS */
    #favoriteButton {
      display: block;
      margin: 20px auto;
      padding: 13px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s;
    }
    #favoriteButton.add {
      background-color: green;
      color: white;
      font-size: 20px;
    }
    #favoriteButton.remove {
      background-color: red;
      color: white;
      font-size: 20px;
    }
  </style>
  <h3>${data.name}</h3>
  <img loading="lazy" src="${CONFIG.BASE_IMAGE_URL}${data.pictureId}" alt="${data.name}" />
  <p class="alamat">Alamat: ${data.address}</p>
  <p class="kota">Kota: ${data.city}</p>
  <p class="deskripsi">${data.description}</p>
  <div class="menu">
    <div class="foods">
        <h2>Menu Makanan</h2>
        <p>${foods}</p>
    </div>
    <div class="drinks">
        <h2>Menu Minuman</h2>
        <p>${drinks}</p>
    </div>
  </div>
  <div class="review">
    <h2>Review</h2>
    <div id="formReview"></div>
    <div class="all_review">
      ${reviews}
    </div>
  </div>
`

const likeButtonTemplate = () => `
    <button id="likeButton" class="add" aria-label="like this restaurant">
        Tambah ke favorite
    </button>
`

const unlikeButtonTemplate = () => `
    <button id="likeButton" class="remove" aria-label="unlike this restaurant">
        Hapus dari favorite
    </button>
`

// let isFavorite = await FavoriteDB.getRestaurant(restaurant.id);

// const likeButton = () => {
//   saveButtonContainer.innerHTML = `
//             <button id="favoriteButton" class="${
//               isFavorite ? "remove" : "add"
//             }">
//               ${isFavorite ? "Hapus dari favorite" : "Tambah ke favorite"}
//             </button>
//           `;

//   const favoriteButton = document.querySelector("#favoriteButton");
//   favoriteButton.addEventListener("click", async () => {
//     if (isFavorite) {
//       await FavoriteDB.deleteRestaurant(restaurant.id);
//       isFavorite = false;
//       console.log("Restoran telah dihapus dari favorit!");
//     } else {
//       await FavoriteDB.putRestaurant(restaurant);
//       isFavorite = true;
//       console.log("Restoran telah ditambahkan ke favorit!");
//     }
//     likeButton();
//   });
// };

export {
 restaurantItemTemplate, restaurantDetailTemplate, likeButtonTemplate, unlikeButtonTemplate 
}
