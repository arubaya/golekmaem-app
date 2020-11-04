import TemplateCreator from '../../templates/template-creator';
import SliderInitiator from '../../../utils/slider-initiator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <div class="content">
          <input id="query" type="text">
          <h2 class="content__heading">Your Liked Restaurant</h2>
                  <div id="restaurants" class="restaurants">
                      
                  </div>
              </div>
        </div>
        `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = '<ul id="listContentMyFavorite"></ul>';
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));

    const listContentMyFavorite = document.getElementById('listContentMyFavorite');

    if (listContentMyFavorite) {
      $(document).ready(() => {
        SliderInitiator.init('listContentMyFavorite');
      });

      listContentMyFavorite.innerHTML = restaurants.reduce((carry, restaurant) => carry.concat(TemplateCreator.restaurantsItem(restaurant)), '');
    }
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada warung makan untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;