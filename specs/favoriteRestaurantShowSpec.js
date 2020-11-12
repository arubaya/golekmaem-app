import FavoriteRestaurantSearchView
  from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter
  from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-idb';

describe('Showing all favorite restaurants', () => {
  let view;
  // let presenter;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should render the information that no restaurants have been liked', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      const presenter = new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      presenter._displayRestaurants(restaurants);

      expect(document.querySelectorAll('.restaurant-item__not__found').length)
        .toEqual(1);
    });

    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been liked', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item__not__found').length)
          .toEqual(1);

        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should renders the restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      const presenter = new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      presenter._displayRestaurants([
        {
          id: 11, name: 'A', rating: 3, description: 'Sebuah film A',
        },
        {
          id: 22, name: 'B', rating: 4, description: 'Sebuah film B',
        },
      ]);

      expect(document.querySelectorAll('.card').length).toEqual(2);
    });

    it('should show the restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.card').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11, name: 'A', rating: 3, description: 'Sebuah film A',
        },
        {
          id: 22, name: 'B', rating: 4, description: 'Sebuah film B',
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
