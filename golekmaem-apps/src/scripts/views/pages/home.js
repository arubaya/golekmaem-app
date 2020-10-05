import DicodingSource from '../../data/dicoding-source';
import TemplateCreator from '../templates/template-creator';
import ScrollInitiator from '../../utils/scroll-initiator';
import SliderInitiator from '../../utils/slider-initiator';

const Home = {
  async render() {
    return `
        <!-- Jumbotron Start -->
        <div id="jumbotron"></div>
        <!-- Jumbotron end -->
        <!-- Header Change start -->
        <div id="headerChange"></div>
        <!-- Header Change end -->
        <!-- Content Recomended start -->
        <section id="contentRecomended">
            <h3 class="section-title" >Warung Makan Rekomendasi</h3>
            <ul id="listContentRecomended"></ul>
        </section>
        <!-- Content Recomended end -->
        <!-- Content Favorite start -->
        <section id="contentFavorite">
            <h3 class="section-title" >Warung Makan Favorit</h3>
            <ul id="listContentFavorite"></ul>
        </section>
        <!-- Content Favorite end -->
        <!-- Content More start -->
        <section id="contentMore">
            <h3 class="section-title" >Warung Makan Lainnya</h3>
            <ul id="listContentMore"></ul>
        </section>
        <!-- Content More end -->
          `;
  },

  async afterRender() {
    const restaurants = await DicodingSource.restaurantList();
    ScrollInitiator.homeScroll();
    document.documentElement.scrollTop = 0;

    const restaurantsContainerRecomended = document.querySelector('#listContentRecomended');
    const restaurantsContainerFavorite = document.querySelector('#listContentFavorite');
    const restaurantsContainerMore = document.querySelector('#listContentMore');
    const jumbotron = document.querySelector('#jumbotron');

    $(document).ready(() => {
      SliderInitiator.init('listContentRecomended');
      SliderInitiator.init('listContentFavorite');
      SliderInitiator.init('listContentMore');
    });

    jumbotron.innerHTML = TemplateCreator.jumbotronHome();
    restaurants.forEach((restaurant) => {
      if (restaurant.rating >= 4.5) {
        restaurantsContainerRecomended.innerHTML += TemplateCreator.restaurantsItem(restaurant);
      } else if (restaurant.rating >= 4.0) {
        restaurantsContainerFavorite.innerHTML += TemplateCreator.restaurantsItem(restaurant);
      } else {
        restaurantsContainerMore.innerHTML += TemplateCreator.restaurantsItem(restaurant);
      }
    });
  },
};

export default Home;
