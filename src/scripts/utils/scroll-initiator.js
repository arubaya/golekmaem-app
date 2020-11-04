const ScrollInitiator = {
  homeScroll() {
    $(window).scroll(function () {
      const wScroll = $(this).scrollTop();

      // Jumbotron Scroll
      $('#jumbotron > .container > .text-container').css({
        transform: `translate(0px, ${wScroll / 4}%)`,
      });

      // Content Scroll
      // if (wScroll > $('#headerChange').offset().top - 60) {
      if (wScroll >= 0) {
        $('#contentRecomended > .section-title').addClass('show');
        $('#contentFavorite > .section-title').addClass('show');
        $('#contentMore > .section-title').addClass('show');
        // $('.card').each((index) => {
        //   setTimeout(() => {
        //     $('#listContentRecomended > li > .card').eq(index).addClass('show');
        //     $('#listContentFavorite > li > .card').eq(index).addClass('show');
        //     $('#listContentMore > li > .card').eq(index).addClass('show');
        //   }, 300 * (index + 1));
        // });
        $('.card').addClass('show');
      }
    });
  },

  favoriteScroll() {
    $('#contentMyFavorite > .section-title').addClass('show');
    $('.card').each(() => {
      $('#listContentMyFavorite > li > .card').addClass('show');
    });
    // $(window).scroll(function () {
    //   const wScroll = $(this).scrollTop();

    //   // if (wScroll > $('#headerChange').offset().top - 400) {
    //   //   $('#contentMyFavorite > .section-title').addClass('show');
    //   //   $('.card').each((index) => {
    //   //     setTimeout(() => {
    //   //       $('#listContentMyFavorite > li > .card').eq(index).addClass('show');
    //   //     }, 300 * (index + 1));
    //   //   });
    //   // }
    //   if (wScroll >= 0) {
    //     $('#contentMyFavorite > .section-title').addClass('show');
    //     $('.card').addClass('show');
    //   }
    // });
  },

  headerChange() {
    $(window).scroll(function () {
      const wScroll = $(this).scrollTop();

      // Header Scroll
      if (wScroll >= $('#headerChange').offset().top - 60) {
        $('#header').addClass('change');
      } else {
        $('#header').removeClass('change');
      }
    });
  },

  tabsSticky() {
    $(window).scroll(function () {
      const wScroll = $(this).scrollTop();

      // Header Scroll
      if (wScroll >= $('#headerChange').offset().top - 60) {
        $('#tabHeader').addClass('sticky');
      } else {
        $('#tabHeader').removeClass('sticky');
      }
    });
  },
};

export default ScrollInitiator;
