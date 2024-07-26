;
(function (win, $) {

  // Header
  var $gnbItem = $(".gnb_item"),
    $briefItem = $(".brief_item"),
    $gnbList = $(".gnb_list"),
    $gnbToggel = $(".gnb_toggel"),
    $dimmed = $(".dimmed"),
    $wrap = $('.wrap'),
    $win = $(window)

  function handleClick() {
    $(this).addClass('is_click').siblings().removeClass('is_click')
  }

  $gnbItem.click(handleClick);
  $briefItem.click(handleClick)

  // click button
  var $btnLink = $(".btn")

  $btnLink.click(function () {
    $btnLink.addClass("click_btn")
  })

  // Swiper Work

  swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    loop: true,
    // spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Nav Toggle

  function showNav() {
    $gnbList.toggleClass('show_menu')
    $wrap.addClass('is_hidden')
    $dimmed.toggle();
    if ($gnbList.hasClass('show_menu')) {
      $gnbToggel.find("i").removeClass('icon_menu').addClass('icon_close');
    } else {
      $gnbToggel.find("i").removeClass('icon_close').addClass('icon_menu');
      $gnbToggel.addClass("nav_close")
    }
  }

  function closeDimmed() {
    $gnbList.removeClass('show_menu')
    $wrap.removeClass('is_hidden')
    $dimmed.hide()
    $gnbToggel.find("i").removeClass('icon_close').addClass('icon_menu');
  }

  $gnbToggel.click(showNav);
  $dimmed.click(closeDimmed);

  $win.resize(function () {
    if ($win.width() > 1200) {
      closeDimmed();
    }
  })

  $(win).on('load', function () {});
})(window, window.jQuery);
