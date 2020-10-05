import UrlParser from '../../routes/url-parser';
import DicodingSource from '../../data/dicoding-source';
import TemplateCreator from '../templates/template-creator';
import ScrollInitiator from '../../utils/scroll-initiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <!-- Jumbotron Start -->
      <div id="jumbotron" crossorigin="anonymous"></div>
      <!-- Jumbotron end -->
      <!-- Header Change start -->
      <div id="headerChange"></div>
      <!-- Header Change end -->
      <!-- Tabs Start -->
      <div id="tabsContent">
        <div id="tabHeader">
          <button class="button-tab active">Makanan</button>
          <button class="button-tab">Minuman</button>
          <button class="button-tab">Ulasan</button>
          <button class="button-tab">Deskripsi</button>
        </div>
        <div id="tabBody">
          <div id="foodsBody" class="tab-body active">
            <h3>Menu Makanan</h3>
          </div>
          <div id="drinksBody" class="tab-body">
            <h3>Menu Minuman</h3>
          </div>
          <div id="reviewsBody" class="tab-body">
            <h3>Ulasan</h3>
            <button id="buttonAddNew">Berikan ulasan <i class="material-icons-round">expand_more</i></button>
            <div id="addNewReview">
              <div class="input-group">
                <label for="inputName">Nama :</label>
                <input id="inputName" type="text" class="input-control" placeholder="Masukkan nama..">
              </div>
              <div class="input-group">
                <label for="inputReview">Ulasan :</label>
                <div class="input-review">
                  <input id="inputReview" type="text" class="input-control" placeholder="Berikan ulasan..">
                  <button id="buttonSend"><i class="material-icons-round">send</i></butto>
                </div>
              </div>
            </div>
          </div>
          <div id="descriptionBody" class="tab-body">
            <h3>Deskripsi</h3>
            <div class="category">
              <p class="title">Kategori :</p>
              <div id="categoryText"> </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tabs end -->
      <!-- Like Button start -->
      <div id="likeButtonContainer"></div>
      <!-- Like Button end -->
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingSource.detailRestaurant(url);
    document.documentElement.scrollTop = 0;
    console.log(restaurant);

    const jumbotron = document.querySelector('#jumbotron');
    const foodsBody = document.querySelector('#foodsBody');
    const drinksBody = document.querySelector('#drinksBody');
    const reviewsBody = document.querySelector('#reviewsBody');
    const descriptionBody = document.querySelector('#descriptionBody');
    descriptionBody.innerHTML += TemplateCreator.detailDescriptionTemplate(restaurant);

    jumbotron.innerHTML = TemplateCreator.jumbotronDetail(restaurant);
    restaurant.menus.foods.forEach((food) => {
      foodsBody.innerHTML += TemplateCreator.menuItem(food.name, 'fastfood');
    });
    restaurant.menus.drinks.forEach((drink) => {
      drinksBody.innerHTML += TemplateCreator.menuItem(drink.name, 'local_cafe');
    });
    restaurant.consumerReviews.forEach((review) => {
      reviewsBody.innerHTML += TemplateCreator.reviewItem(review);
    });
    restaurant.categories.forEach((category) => {
      document.getElementById('categoryText').innerHTML += `<p>${category.name}</p>`;
    });
    likeButtonContainer.innerHTML = TemplateCreator.likeButton();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });

    ScrollInitiator.tabsSticky();
    this._tabOnClick();
    this._accordionOnClick();
    this._skipDownButton();
    this._sendReview(restaurant);
  },

  _tabOnClick() {
    $('.button-tab').each((index) => {
      $('.button-tab').eq(index).click(() => {
        $('.button-tab.active').removeClass('active');
        $('.tab-body.active').removeClass('active');
        $('.button-tab').eq(index).addClass('active');
        $('.tab-body').eq(index).addClass('active');
      });
    });
  },

  _accordionOnClick() {
    $('#buttonAddNew').click(() => {
      if ($('#addNewReview').attr('class') === 'active') {
        $('#addNewReview.active').removeClass('active');
      } else {
        $('#addNewReview').addClass('active');
      }
    });
  },

  _sendReview(restaurant) {
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');
    $('#buttonSend').click(() => {
      const reviewData = {
        id: restaurant.id,
        name: nameInput.value,
        review: reviewInput.value,
      };
      DicodingSource.addNewReview(reviewData);
      nameInput.value = ' ';
      reviewInput.value = ' ';
    });
  },

  _skipDownButton() {
    const skipDownButton = document.querySelector('.skip-down');
    const headerChange = document.querySelector('#headerChange');
    skipDownButton.addEventListener('click', () => {
      document.documentElement.scrollTop = headerChange.offsetTop - 70;
    });
  },
};

export default Detail;
