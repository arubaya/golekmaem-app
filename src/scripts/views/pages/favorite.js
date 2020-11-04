import FavoriteRestaurantIdb from '../../data/favorite-idb';
import TemplateCreator from '../templates/template-creator';
// import SliderInitiator from '../../utils/slider-initiator';
import ScrollInitiator from '../../utils/scroll-initiator';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantSearchPresenter from './liked-restaurant/favorite-restaurant-search-presenter';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return `
    <!-- Jumbotron Start -->
    <div id="jumbotron"></div>
    <!-- Jumbotron end -->
    <!-- Header Change start -->
        <div id="headerChange"></div>
        <!-- Header Change end -->
    <!-- Content My Favorite start -->
    <div id="contentMyFavorite">
      <h3 class="section-title" >Warung Makan Favoritmu</h3>
      <input id="query" type="text" placeholder="Cari warung makan...">
      <div id="restaurants"></div>
    </div>
    <!-- Content My Favorite end -->
    `;
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ favoriteRestaurants: FavoriteRestaurantIdb, view });

    document.documentElement.scrollTop = 0;
    ScrollInitiator.favoriteScroll();

    const jumbotron = document.querySelector('#jumbotron');
    jumbotron.innerHTML = TemplateCreator.jumbotronFavorite();
  },
};

export default Favorite;
