$(document).ready(function () {
  //pc gnb depth2
  $(".header ").on("mouseenter", function (event) {
    event.preventDefault();
    $(".header").addClass("over");
  });

  $(".header ").on("mouseleave", function (event) {
    event.preventDefault();
    $(".header").removeClass("over");
  });
  //모바일 gnb depth2

  $(".btnAllmenu").click(function (event) {
    $(".header").removeClass("over");
    event.preventDefault();

    $(".mobileGnbWrap").css({ width: "100%" });
    $(".bBg").stop().fadeIn();
    $(".m-navbox").stop().addClass("on");
    $("html, body").css("overflow", "hidden");
  });

  $(".closeBtn, .bBg").click(function (event) {
    event.preventDefault();

    $(".bBg").stop().fadeOut();
    $(".mobileGnbWrap").css({ width: "0" });
    $(".m-navbox").stop().removeClass("on");
    $(".m-depth2").stop().slideUp();
    $(".m-nav > li").removeClass("on");
    $("html, body").css("overflow", "auto");
  });

  $(".m-nav > li > a").on("click", function (event) {
    event.preventDefault();

    $(this).parent().siblings().children(".m-depth2").stop().slideUp();

    $(this).siblings(".m-depth2").stop().slideToggle();

    $(this).parent().siblings().removeClass("on");
    $(this).parent().toggleClass("on");
  });

  var swiper = new Swiper(".main__visual", {
    slidesPerView: 1,
    loop: true, // 슬라이드 반복 여부
    speed: 1500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  var swiper02 = new Swiper(".main-sec03__slide", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 20,
    speed: 1500,
    pagination: false,
    autoplay: false,
    navigation: {
      // 버튼
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper03 = new Swiper(".sec04-slide__wrap", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 20,
    speed: 1500,
    pagination: false,
    autoplay: false,
    navigation: {
      // 버튼
      nextEl: ".arr__next",
      prevEl: ".arr__prev",
    },
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".mo-header").css({ "background-color": "#fff", "box-shadow": "4px 0px 4px 1px rgb(0 0 0 / 20%)" });
    $(".mo-logo").css({ "background-image": 'url("/images/m_logo1.svg")' });
    $(" .btnAllmenu .bar_top, .btnAllmenu .bar_mid").css({ "background-color": "#0e3460" });
  }
  if ($(window).scrollTop() == 0) {
    $(".mo-header").css({ "background-color": "transparent", "box-shadow": "none" });
    $(".mo-logo").css({ "background-image": 'url("/images/m_logo2.svg")' });
    $(" .btnAllmenu .bar_top, .btnAllmenu .bar_mid").css({ "background-color": "#fff" });
  }
});
