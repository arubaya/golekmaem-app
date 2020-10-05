import FavoriteRestaurantIdb from '../../data/favorite-idb';
import TemplateCreator from '../templates/template-creator';
import SliderInitiator from '../../utils/slider-initiator';
import ScrollInitiator from '../../utils/scroll-initiator';

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
      <ul id="listContentMyFavorite"></ul>
    </div>
    <!-- Content My Favorite end -->
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    document.documentElement.scrollTop = 0;
    ScrollInitiator.favoriteScroll();

    const listContentMyFavorite = document.querySelector('#listContentMyFavorite');
    const jumbotron = document.querySelector('#jumbotron');
    jumbotron.innerHTML = TemplateCreator.jumbotronFavorite();

    $(document).ready(() => {
      SliderInitiator.init('listContentMyFavorite');
    });

    restaurants.forEach((restaurant) => {
      listContentMyFavorite.innerHTML += TemplateCreator.restaurantsItem(restaurant);
    });
  },
};

export default Favorite;
