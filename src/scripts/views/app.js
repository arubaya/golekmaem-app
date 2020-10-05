import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import ScrollInitiator from '../utils/scroll-initiator';

class App {
  constructor({
    buttonOpenNav, buttonCloseNav, drawer, content, buttonLink,
  }) {
    this._buttonOpenNav = buttonOpenNav;
    this._buttonCloseNav = buttonCloseNav;
    this._buttonLink = buttonLink;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      buttonOpen: this._buttonOpenNav,
      buttonClose: this._buttonCloseNav,
      drawer: this._drawer,
      buttonLink: this._buttonLink,
      content: this._content,
    });

    ScrollInitiator.headerChange();
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
