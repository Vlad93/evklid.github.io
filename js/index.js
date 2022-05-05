document.addEventListener("DOMContentLoaded", function() {

  //   Swiper
  const swiper = new Swiper('.swiper', {
  // Optional parameters
    loop: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    // autoplay
    autoplay: {
      delay: 4000,
    },
    // pagination
    pagination: {
      el: '.swiper-pagination',
      bulletElement: 'li',
      bulletActiveClass: 'active',
      bulletClass: 'hero-dots__item',
      clickable: 'true',
    },
  });
//     Swiper End

//     Tabs
  // const tabs = document.querySelectorAll('[role="tab"]');
  // const tabList = document.querySelector('[role="tablist"]');
  // // Enable arrow navigation between tabs in the tab list
  // let tabFocus = 0;

  // tabList.addEventListener("keydown", e => {
  //   // Move right
  //   if (e.keyCode === 39 || e.keyCode === 37) {
  //     tabs[tabFocus].setAttribute("tabindex", -1);
  //     if (e.keyCode === 39) {
  //       tabFocus++;
  //       // If we're at the end, go to the start
  //       if (tabFocus >= tabs.length) {
  //         tabFocus = 0;
  //       }
  //       // Move left
  //     } else if (e.keyCode === 37) {
  //       tabFocus--;
  //       // If we're at the start, move to the end
  //       if (tabFocus < 0) {
  //         tabFocus = tabs.length - 1;
  //       }
  //     }
  //     tabs[tabFocus].setAttribute("tabindex", 0);
  //     tabs[tabFocus].focus();
  //   }
  // });
  document.querySelectorAll('.tabs-btns__button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      document.querySelectorAll('.tabs-btns__button').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('active');
        // tabsBtn.setAttribute("aria-selected", false);
      });
      tabsBtn.classList.add('active');
      // tabsBtn.setAttribute("aria-selected", true);
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__item').forEach(function(tabsContent) {
        tabsContent.classList.remove('active');
        // tabsContent.setAttribute("hidden", true);
      });
      document.querySelector(`[data-target = "${path}"]`).classList.add('active');
      // document.querySelector(`[data-target = "${path}"]`).removeAttribute("hidden");
    });
  });
//    Tabs End

//    Accordion
  $( function() {
    $( ".accordion" ).accordion({
      collapsible: true,
      heightStyle: "content",
      active: false,
      animate: 500
    });
  });
//    Accordion End

//  Burger menu
  document.querySelector('.header__hamb-btn').addEventListener('click', function (event) {
    document.querySelector('.header__nav').classList.add('active');
  });
  document.querySelector('.header-menu__btn-close').addEventListener('click', function (event) {
    document.querySelector('.header__nav').classList.remove('active');
  });
//  Burger menu End

//  Search form
  document.querySelector('.header__search').addEventListener('click', function (event) {
    document.querySelector('.search-form').classList.add('active');
  });
  document.querySelector('.search-form__btn-close').addEventListener('click', function (event) {
    document.querySelector('.search-form').classList.remove('active');
  });

});

