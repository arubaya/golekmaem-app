import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class DicodingSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async addNewReview(review) {
    const response = await fetch(API_ENDPOINT.ADD_NEW_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(review),
    });
    const responseJson = await response.json();
    console.log(responseJson);
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default DicodingSource;
