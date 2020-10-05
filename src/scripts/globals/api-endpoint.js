import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}list`,
  ADD_NEW_REVIEW: `${CONFIG.BASE_URL}review`,
  PICTURE_SMALL: `${CONFIG.BASE_URL}images/small/`,
  PICTURE_MEDIUM: `${CONFIG.BASE_URL}images/medium/`,
  PICTURE_LARGE: `${CONFIG.BASE_URL}images/large/`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
