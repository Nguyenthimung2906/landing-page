;
(function (win, $) {

  // Header
  var $gnbItem = $(".gnb_item"),
    $briefItem = $(".brief_item")

  function handleClick() {
    $(this).addClass('is_click').siblings().removeClass('is_click')
  }

  $gnbItem.click(handleClick);
  $briefItem.click(handleClick)

  // Nav Toggel

  const navMenu = document.querySelector(".nav__menu"),
    navToggel = document.querySelector(".nav__toggel"),
    navClose = document.querySelector(".nav__close"),
    navLink = document.querySelectorAll(".nav__link"),
    header = document.querySelector(".header")

  $(document).ready(function () {
    navToggel.on("click", function () {
      $(".gnb_list").addClass("active");
    });

    navClose.on("click", function () {
      $(".gnb_list").removeClass("active");
    });
  });
  // Swiper Work
  var swiperInstance = null;

  function initOrUpdateSwiper() {
    var windowWidth = window.innerWidth;

    if (swiperInstance !== null) {
      swiperInstance.destroy();
      swiperInstance = null;
    }

    if (windowWidth > 768) {
      swiperInstance = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 32,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else {
      swiperInstance = new Swiper(".swiper_mo", {
        slidesPerView: "auto",
        spaceBetween: 32,
        initialSlide: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }

  initOrUpdateSwiper();

  window.addEventListener('resize', function () {
    initOrUpdateSwiper();
  });

  // 
  // $(document).ready(function () {
  //   $(".nav_toggle").on("click", function () {
  //     $(".gnb_list").addClass("active");
  //   });

  //   $(".nav__close").on("click", function () {
  //     $(".gnb_list").removeClass("active");
  //   });
  // });

  $(function () {});

  $(win).on('load', function () {});
})(window, window.jQuery);
