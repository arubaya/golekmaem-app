const DrawerInitiator = {
  init({
    buttonOpen, drawer, buttonClose, buttonLink, content,
  }) {
    buttonOpen.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    buttonClose.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    buttonLink.forEach(() => {
      addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    });

    content.addEventListener('touchmove', (event) => {
      const touchPointX = event.touches[0].clientX;
      if (touchPointX <= 150) {
        drawer.classList.toggle('open');
      }
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
