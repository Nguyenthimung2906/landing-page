;
(function (win, $) {

  // Header
  var $gnbList = $(".gnb_list"),
    $gnbToggle = $(".gnb_toggle"),
    $dimmed = $(".dimmed"),
    $wrap = $('.wrap'),
    $win = $(window)

  // header
  $(document).ready(function () {
    if (window.location.hash) {
      var target = $(window.location.hash);
      window.history.replaceState(null, null, window.location.pathname);
      $('html, body').animate({
        scrollTop: $('#header').offset().top
      }, 100);
    }
  });

  // Swiper Work
  swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Nav Toggle

  function showNav() {
    $gnbList.toggleClass('show_menu')
    $wrap.toggleClass('is_hidden')
    $dimmed.toggle();
    if ($gnbList.hasClass('show_menu')) {
      $gnbToggle.find("i").removeClass('icon_menu').addClass('icon_close');
    } else {
      $gnbToggle.find("i").removeClass('icon_close').addClass('icon_menu');
      $gnbToggle.addClass("nav_close")
    }
  }

  function closeDimmed() {
    $gnbList.removeClass('show_menu')
    $wrap.removeClass('is_hidden')
    $dimmed.hide()
    $gnbToggle.find("i").removeClass('icon_close').addClass('icon_menu');
  }

  $gnbToggle.click(showNav);
  $dimmed.click(closeDimmed);

  $win.resize(function () {
    if ($win.width() > 1200) {
      closeDimmed();
    }
  })

  function handleMenuItemClick(event) {
    var target = $(event.target);

    if (target.is('a')) {
      closeDimmed();
    }
  }

  $gnbList.on('click', 'a', handleMenuItemClick);

  $(win).on('load', function () {});
})(window, window.jQuery);
