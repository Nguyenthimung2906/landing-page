; (function (win, $) {


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

  if (navToggel) {
    navToggel.addEventListener("click", function () {
      navMenu.classList.add('show__menu')
    })
  }

  if (navClose) {
    navClose.addEventListener("click", function () {
      navMenu.classList.remove('show__menu')
    })
  }

  navLink.forEach(function (element) {
    element.addEventListener("click", function () {
      navMenu.classList.remove('show__menu')
    })
  });
  // Swiper Work
  var swiperInstance = null; // Biến lưu trữ Swiper instance

  // Hàm để khởi tạo hoặc cập nhật Swiper
  function initOrUpdateSwiper() {
    var windowWidth = window.innerWidth;
  
    // Hủy bỏ Swiper hiện tại nếu đã tồn tại
    if (swiperInstance !== null) {
      swiperInstance.destroy();
      swiperInstance = null;
    }
  
    // Tạo Swiper cho PC nếu kích thước lớn hơn 768px
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
    }
    // Tạo Swiper cho Mobile nếu kích thước nhỏ hơn hoặc bằng 768px
    else {
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
  
  // Gọi hàm khi tải trang
  initOrUpdateSwiper();
  
  // Gọi lại hàm khi resize cửa sổ
  window.addEventListener('resize', function() {
    initOrUpdateSwiper(); // Khởi tạo hoặc cập nhật lại Swiper khi resize
  });
  

  $(function () {
  });

  $(win).on('load', function () {
  });
})(window, window.jQuery);
