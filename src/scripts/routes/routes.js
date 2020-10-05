import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';

const routes = {
  '/restaurant/:id': Detail,
  '/favorite': Favorite,
  '/': Home,
  '/home': Home,
};

export default routes;
