import API_ENDPOINT from '../../globals/api-endpoint';

const TemplateCreator = {
  restaurantsItem(restaurant) {
    return `
        <li>
            <div class="card" crossorigin="anonymous" style="background-image: url('${API_ENDPOINT.PICTURE_SMALL + restaurant.pictureId}')" aria-label="Warung makan ${restaurant.name}">
                <div class="container">
                    <div class="card-header">
                        <div class="rating"><i class="material-icons-round">star</i>${restaurant.rating}</div>
                    </div>
                    <div class="card-text">
                        <p class="city" >${restaurant.city}</p>
                        <a class="name" href="#/restaurant/:id${restaurant.id}">
                            <h4>${restaurant.name}</h4>
                        </a>
                        <p class="description" >${restaurant.description}</p>
                    </div>
                </div
            </div>
        </li>
    `;
  },

  jumbotronHome() {
    $('#jumbotron').css({
      'background-image': 'url(\'./images/hero-image.jpg\')',
    });

    return `
        <div class="container">
        <div class="text-container">
            <h2><span style="color: #c6061c;">golek</span>maem</h2>
            <p>Temukan warung makan favoritmu.</p>
        </div>
        </div>
        `;
  },

  jumbotronFavorite() {
    $('#jumbotron').css({
      'background-image': 'url(\'./images/hero-image.jpg\')',
    });

    return `
        <div class="container">
        <div class="text-container">
            <h2>Warung Makan Favoritmu</h2>
        </div>
        </div>
        `;
  },

  jumbotronDetail(restaurant) {
    $('#jumbotron').css({
      'background-image': `url('${API_ENDPOINT.PICTURE_MEDIUM + restaurant.pictureId}')`,
    });

    return `
        <div class="container">
            <div class="detail-text-container">
                <p class="detail-city" >${restaurant.city}</p>
                <h2 class="detail-name" >${restaurant.name}</h2>
            </div>
            <div class="skip-down">
                <button><i class="material-icons-round">expand_more</i></button>
            </div>
        </div>
        `;
  },

  menuItem(menu, icons) {
    return `
    <div class="menu-item">
      <i class="material-icons-round">${icons}</i>
      ${menu}
    </div>
    `;
  },

  reviewItem(review) {
    return `
      <div class="review-item">
        <i class="material-icons-round">face</i>
        <div class="container">
          <p class="review-name">${review.name}</p>
          <p class="review-text">${review.review}</p>
          <p class="review-date">${review.date}</p>
      </div>
    `;
  },

  detailDescriptionTemplate(restaurant) {
    return `
      <div class="detail-container">
        <div class="rating">
          <p class="title">Rating :</p>
          <p class="restaurant-rating"><i class="material-icons-round">star</i>${restaurant.rating}</p>
        </div>
        <div class="address">
          <p class="title">Alamat :</p>
          <p>${restaurant.address}</p>
        </div>
        <div class="description">
          <p class="title">Deskripsi :</p>
          <p>${restaurant.description}</p>
        </div>
      </div>
    `;
  },

  likeRestaurantButton() {
    return `
    <button aria-label="suka restaurant ini" id="likeButton" class="like">
      <i class="material-icons-round" aria-hidden="true">favorite_border</i>
    </button>
    `;
  },

  unlikeRestaurantButton() {
    return `
    <button aria-label="tidak suka restaurant ini" id="likeButton" class="like">
      <i class="material-icons-round" aria-hidden="true">favorite</i>
    </button>
    `;
  },
};

export default TemplateCreator;
