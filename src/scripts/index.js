import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  buttonOpenNav: document.querySelector('#navbarToggle'),
  buttonCloseNav: document.querySelector('#navbarToggleClose'),
  buttonLink: document.querySelectorAll('.link'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
});
