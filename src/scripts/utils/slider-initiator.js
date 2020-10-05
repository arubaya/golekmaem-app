const SliderInitiator = {
  async init(id) {
    this._id = `${id}`;

    await this._renderSlider();
  },

  async _renderSlider() {
    $(`#${this._id}`).lightSlider({
      autoWidth: true,
      loop: true,
      pager: false,
    });
  },
};

export default SliderInitiator;
