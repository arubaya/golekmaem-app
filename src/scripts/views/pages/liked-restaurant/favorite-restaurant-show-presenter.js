class FavoriteRestaurantShowPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this.favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurant();
  }

  async _showFavoriteRestaurant() {
    const restaurants = await this.favoriteRestaurants.getAllRestaurants();
    this._displayRestaurants(restaurants);
  }
 
  _displayRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }
}
 
export default FavoriteRestaurantShowPresenter;